import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { LoginComponent } from './components/login/login.component';
import { ChangeProjectComponent } from './components/change-project/change-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    PresentationComponent,
    FooterComponent,
    ListProjectsComponent,
    LoginComponent,
    ChangeProjectComponent,
    AddProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
