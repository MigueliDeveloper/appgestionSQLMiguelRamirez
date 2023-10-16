import { RestService } from '../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-agregar-archivo',
  templateUrl: './agregar-archivo.component.html',
  styleUrls: ['./agregar-archivo.component.css']
})
export class AgregarArchivoComponent implements OnInit{
  
  public archivos: any = []
  public loading: boolean | undefined

  constructor(private rest: RestService) { }

  ngOnInit(): void {
  }
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]  
    this.archivos.push(archivoCapturado)
  }
   
  // Subir archivo
  
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
