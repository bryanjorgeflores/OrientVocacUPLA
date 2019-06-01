import { BrowserModule, Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatGridListModule,
  MatIconModule, MatCheckboxModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { SchoolComponent } from './school/school.component';
import { SchoolsComponent } from './schools/schools.component';

import { UserPostProvider } from 'src/providers/post.providers/user.post.provider';
import { SchoolGetProvider } from 'src/providers/get.providers/school.get.provider';

import { UserGetProvider } from 'src/providers/get.providers/user.get.provider';
import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { ResultsComponent } from './results/results.component';
import { UserSearchComponent } from './modals.group/user-search/user-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MultipleIntelligenceComponent } from './evaluation-types.group/multiple-intelligence/multiple-intelligence.component';
import { CharacterologicalComponent } from './evaluation-types.group/characterological/characterological.component';
import { VocationalOrientationComponent } from './evaluation-types.group/vocational-orientation/vocational-orientation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EvaluationsComponent,
    LoginComponent,
    RegisterComponent,
    SchoolComponent,
    SchoolsComponent,
    EvaluationComponent,
    ResultsComponent,
    UserSearchComponent,
    PageNotFoundComponent,
    CharacterologicalComponent,
    MultipleIntelligenceComponent,
    VocationalOrientationComponent,

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
    ReactiveFormsModule,
    MatCheckboxModule,

  ],
  providers: [
    UserPostProvider,
    Title,
    SchoolGetProvider,
    UserGetProvider,
    UserGlobalConfig,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
