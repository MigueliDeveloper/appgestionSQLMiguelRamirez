import { Component, OnInit } from '@angular/core';
// FormBuilder y FormGroup para crear y manejar formularios.
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
// ActivatedRoute y Router para obtener el ID del mensaje que se está editando.
import {ActivatedRoute, Router} from '@angular/router'
// ToastrService para mostrar notificaciones.
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
// GMensaje y GmensajeService para interactuar con el modelo de datos y el servicio de mensajes.
import { GMensaje  } from '../../Models/GMensaje'
import { GmensajeService} from '../../services/gmensajes.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  /**
   *
   * TODO:
   *
   * El componente tiene las siguientes propiedades:
   *
   * contactoForm: El formulario que los usuarios utilizan para enviar mensajes.
   * titulo: El título del formulario.
   * id: El ID del mensaje que se está editando.
   */
  contactoForm: FormGroup;
  titulo = 'Formulario de Contacto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _mensajeService: GmensajeService,
              private aRouter: ActivatedRoute) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  /**
   *
   * TODO:
   *
   * ngOnInit(): Se llama cuando el componente se inicializa.
   * En este método, se llama al método esEditar() para verificar si el componente está editando un mensaje existente.
   */
  ngOnInit(): void {
    this.esEditar();
  }

  /**
   *
   * TODO:
   *
   * agregarMensaje(): Se llama cuando el usuario envía el formulario.
   * En este método, se crea un objeto GMensaje con los datos del formulario.
   * Si el componente está editando un mensaje, se llama al método editarMensaje() del servicio de mensajes.
   * De lo contrario, se llama al método guardarMensaje() del servicio de mensajes.
   */
  agregarMensaje() {
    const MENSAJE: GMensaje  = {
      nombre: this.contactoForm.get('nombre')?.value,
      email: this.contactoForm.get('email')?.value,
      asunto: this.contactoForm.get('asunto')?.value,
      mensaje: this.contactoForm.get('textomensaje')?.value
    }
    if(this.id !== null){
      // Editamos Usuario
      this._mensajeService.editarMensaje(this.id, MENSAJE).subscribe(data =>{
        this.toastr.info('El mensaje fue actualizado con exito!', 'Mensaje Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.contactoForm.reset();
      })
    } else{
      // Agregamos Usuario
      console.log(MENSAJE);
        this._mensajeService.guardarMensaje(MENSAJE).subscribe(data => {
        this.toastr.success('El mensaje fue enviado con exito!', 'Mensaje Enviado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.contactoForm.reset();
      })
    }
  }

  /**
   *
   * TODO:
   *
   * esEditar(): Se llama para verificar si el componente está editando un mensaje existente.
   * Si el componente está editando un mensaje, se establece el título del formulario en "Editar Mensaje" y se obtiene el mensaje del servicio de mensajes.
   * Luego, los datos del mensaje se establecen en el formulario.
   */
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Mensaje';
      this._mensajeService.obtenerMensaje(this.id).subscribe(data => {
        this.contactoForm.setValue({
          nombre: data.nombre,
          email: data.apellidos,
          telefono: data.edad,
          asunto: data.email,
          textomensaje: data.telefono
        })
      })
    }
  }
}
