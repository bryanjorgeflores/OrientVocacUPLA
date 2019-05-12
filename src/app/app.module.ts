import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CollegeComponent } from './college/college.component';
import { CollegesComponent } from './colleges/colleges.component';

import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { CollegeGetProvider } from 'src/providers/get.providers/college.get.provider';

import { StyleGlobalConfig } from 'src/config/globals.config/style.global.config';
import { UserGetProvider } from 'src/providers/get.providers/user.get.provider';
import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EvaluationsComponent,
    LoginComponent,
    RegisterComponent,
    CollegeComponent,
    CollegesComponent,
    EvaluationComponent,
    ResultsComponent,
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
    NgbModule,

  ],
  providers: [
    UserPostProvider,
    Title,
    CollegeGetProvider,
    UserGetProvider,
    StyleGlobalConfig,
    UserGlobalConfig,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
