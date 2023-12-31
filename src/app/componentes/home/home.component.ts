import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GcursoService } from '../../services/gcurso.service';
import { GCurso } from '../../Models/gcurso';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listCursos: GCurso[] = []
  

  constructor(private _gcursoService: GcursoService, private toastr: ToastrService ){
    
  }
    ngOnInit(): void{
  this.obtenerCursos()
  
    }
    obtenerCursos() {
      this._gcursoService.getCursos().subscribe(data => {
        console.log(data);
        this.listCursos = data;
      }, error => {
        console.log(error);
      })
    }
    
    eliminarCurso(id: any) {
      this._gcursoService.eliminarCurso(id).subscribe(data => {
        this.toastr.error('El curso fue eliminado con exito' ,'Curso Eliminado');
        this.obtenerCursos();
      }, error => {
        console.log(error);
      })
    }
}
