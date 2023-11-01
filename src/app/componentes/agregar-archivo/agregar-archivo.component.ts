// El componente tiene un formulario para subir archivos al servidor.
// Importa el servicio RestService, que se utiliza para realizar solicitudes HTTP al servidor.
import { RestService } from '../../services/rest.service';
// Esta línea importa el decorador Component y la interfaz OnInit de Angular. El decorador Component se utiliza para definir un componente Angular. La interfaz OnInit se implementa para inicializar el componente.
import { Component, OnInit } from '@angular/core';
// Esta línea importa las clases FormControl y FormGroup de Angular. La clase FormControl se utiliza para representar un control de formulario. La clase FormGroup se utiliza para representar un grupo de controles de formulario.
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-agregar-archivo',
  templateUrl: './agregar-archivo.component.html',
  styleUrls: ['./agregar-archivo.component.css']
})
export class AgregarArchivoComponent implements OnInit{

  /**
   *
   * TODO:
   *
   * Estas líneas declaran las propiedades archivos y loading. La propiedad archivos es una matriz que almacena los archivos que el usuario
   * ha seleccionado para subir. La propiedad loading es un valor booleano que indica si el componente está cargando archivos al servidor.
   * */
  public archivos: any = []
  public loading: boolean | undefined

  // El constructor del componente inyecta el servicio RestService.
  constructor(private rest: RestService) { }

  // El método ngOnInit() se llama cuando el componente se inicializa.
  ngOnInit(): void {
  }

  /**
   *
   * TODO:
   *
   * El método capturarFile() se llama cuando el usuario selecciona un archivo para subir.
   * El método almacena el archivo en la matriz archivos.
   *
   */
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
  }

  // Subir archivo
  /**
   * TODO:
   *
   * El método subirArchivo() se llama cuando el usuario hace clic en el botón para subir los archivos.
   * El método crea un objeto FormData con los archivos que el usuario ha seleccionado para subir.
   * Luego, realiza una solicitud HTTP POST al servidor para subir los archivos. Si la solicitud es exitosa,
   * el método muestra la respuesta del servidor en la consola. Si la solicitud falla, el método muestra un mensaje de error.
   */
  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string) => {
        formularioDeDatos.append('myfile', archivo)
      })
      this.rest.post(`http://localhost:3001/api/upload`, formularioDeDatos)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);
        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }
}
