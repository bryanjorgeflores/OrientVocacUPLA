import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule, MatGridListModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: AppComponent},
  { path: 'encuestas', component: EncuestasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EncuestasComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
