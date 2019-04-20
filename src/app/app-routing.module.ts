import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'encuestas', component: EncuestasComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
