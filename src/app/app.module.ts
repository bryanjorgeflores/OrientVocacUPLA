import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { Encuesta1Component } from './encuesta1/encuesta1.component';

const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: AppComponent},
  { path: 'encuestas', component: EncuestasComponent},
  { path: 'colegios', component: ColegiosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EncuestasComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ColegiosComponent,
    Encuesta1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
