import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CollegeComponent } from './college/college.component';
import { CollegesComponent } from './colleges/colleges.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'colleges', component: CollegesComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', pathMatch: 'prefix', redirectTo: 'evaluations' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
