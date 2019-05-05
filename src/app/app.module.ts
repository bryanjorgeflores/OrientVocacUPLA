import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Route } from '@angular/router';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { Encuesta1Component } from './encuesta1/encuesta1.component';
import { UserPostProvider } from 'src/providers/user-post.provider';

const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: AppComponent},
  { path: 'encuestas', component: EncuestasComponent},
  { path: 'colegios', component: ColegiosComponent}
];

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
    MatIconModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    UserPostProvider,
    HttpClientModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
