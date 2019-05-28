import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

import { StyleGlobalConfig } from 'src/config/globals.config/style.global.config';
import { UserGetProvider } from 'src/providers/get.providers/user.get.provider';
import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { ResultsComponent } from './results/results.component';
import { UserSearchComponent } from './modals/user-search/user-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from 'src/services/user.service';

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
    SchoolGetProvider,
    UserGetProvider,
    StyleGlobalConfig,
    UserGlobalConfig,
    UserService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
