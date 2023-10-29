import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

// Componentes
import { LoginComponent } from './componentes/login/login.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { HomeComponent } from './componentes/home/home.component'
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AgregarArchivoComponent } from './componentes/agregar-archivo/agregar-archivo.component';
import { AgregarimagenComponent } from './componentes/agregarimagen/agregarimagen.component';
import { CursoComponent} from './componentes/curso/curso.component';
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';

// Guards
import { AuthGuard } from './utils/auth.guard';




const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard]},
  {path: 'archivo', component: AgregarArchivoComponent, canActivate: [AuthGuard]},
  {path: 'agregarimagen', component: AgregarimagenComponent, canActivate: [AuthGuard]},
  {path: 'crearcurso', component: CrearCursosComponent, canActivate: [AuthGuard]},
  {path: 'editarCurso/:id', component: CrearCursosComponent},
  {path: 'listarcursos', component: ListarCursosComponent},
  //Poner en el icono del ojo.
  {path: 'verCurso/:id', component: CursoComponent},
  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
