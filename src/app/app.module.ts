//modules
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//app component
import { AppComponent } from './app.component';

//components
import { AboutComponent } from './components/about/about.component';

import { ContactComponent } from './components/contact/contact.component';

import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './components/header/header.component';

import { PresentationComponent } from './components/presentation/presentation.component';

import { FooterComponent } from './components/footer/footer.component';

import { ListProjectsComponent } from './components/list-projects/list-projects.component';

import { LoginComponent } from './components/login/login.component';

import { SkillsComponent } from './components/skills/skills.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EducationComponent } from './components/education/education.component';

import { ButtonLoginComponent } from './components/button-login/button-login.component';

import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';

import { ImgAPComponent } from './components/img-ap/img-ap.component';

import { ChangeAboutComponent } from './components/modals/change-about/change-about.component';

import { ChangePresentationComponent } from './components/modals/change-presentation/change-presentation.component';

import { ChangeSkillsComponent } from './components/modals/change-skills/change-skills.component'; //falta agregar modal update de hard skills

import { ChangeEducationComponent } from './components/modals/change-education/change-education.component';

import { ChangeProjectComponent } from './components/modals/change-project/change-project.component';

//modals

import { AddEducationComponent } from './components/modals/add-education/add-education.component';

import { AddProjectComponent } from './components/modals/add-project/add-project.component';

import { AddSkillsComponent } from './components/modals/add-skills/add-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    PresentationComponent,
    FooterComponent,
    ListProjectsComponent,
    LoginComponent,
    SkillsComponent,
    PageNotFoundComponent,
    ImgAPComponent,
    EducationComponent,
    ButtonLoginComponent,
    ButtonLogoutComponent,
    ChangeAboutComponent,
    ChangePresentationComponent,
    ChangeSkillsComponent,
    ChangeEducationComponent,
    ChangeProjectComponent,
    AddEducationComponent,
    AddProjectComponent,
    AddSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
