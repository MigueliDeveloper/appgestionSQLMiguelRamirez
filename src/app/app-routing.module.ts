import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar Componentes
import { HomeComponent } from './componentes/home/home.component'
import { AgregarimagenComponent } from './componentes/agregarimagen/agregarimagen.component';
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursoComponent} from './componentes/curso/curso.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { AgregarArchivoComponent } from './componentes/agregar-archivo/agregar-archivo.component';

import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: SignInComponent},
  {
    path: 'home', 
    component: HomeComponent,
    children: [
    {
      path:'curso',
      component: CursoComponent
    },
    {
      path: 'verCurso/:id',
      component: CursoComponent
    },
    {
      path: 'crearcurso',
      component: CrearCursosComponent
    },
   
    {
      path: 'editarCurso/:id',
      component: CrearCursosComponent
    },
    {
      path: 'listarcursos',
      component: ListarCursosComponent
    },
    {
      path: 'contacto',
      component: ContactoComponent
    },
    {
      path: 'agregarimagen',
      component: AgregarimagenComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'agregar-archivo',
      component: AgregarArchivoComponent
    }
    
    ]
  },

  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
