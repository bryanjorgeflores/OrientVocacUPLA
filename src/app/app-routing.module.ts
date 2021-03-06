import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { Encuesta1Component } from './encuesta1/encuesta1.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'encuestas', component: EncuestasComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'colegios', component: ColegiosComponent},
  { path: 'inteligenciamultiple', component: Encuesta1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
