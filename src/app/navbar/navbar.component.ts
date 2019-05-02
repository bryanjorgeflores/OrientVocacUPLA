import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { EncuestasComponent } from '../encuestas/encuestas.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AppComponent},
  {path: 'encuestas', component: EncuestasComponent}
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navbarOpen = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
