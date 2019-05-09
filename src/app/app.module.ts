import { BrowserModule, Title } from '@angular/platform-browser';
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
import { CollegesComponent } from './colleges/colleges.component';
import { Encuesta1Component } from './encuesta1/encuesta1.component';

import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { CollegeGetProvider } from 'src/providers/get.providers/college.get.provider';

import { StyleGlobalConfig } from 'src/config/globals.config/style.global.config';


@NgModule({
  declarations: [
    AppComponent,
    EncuestasComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CollegesComponent,
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
    Title,
    CollegeGetProvider,
    StyleGlobalConfig,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
