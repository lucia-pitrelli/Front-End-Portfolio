import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ChangeProjectComponent } from './components/modals/change-project/change-project.component';
import { AddProjectComponent } from './components/modals/add-project/add-project.component';
import { DeleteProjectComponent } from './components/modals/delete-project/delete-project.component';
import { ProjectComponent } from './components/project/project.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PortfolioService } from './servicios/portfolio.service'; //ver
import { HttpClientModule } from '@angular/common/http'; //ver
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //ver

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'changeProject', component: ChangeProjectComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'deleteProject', component: DeleteProjectComponent }, //no se si es form
  { path: 'project/:id', component: ProjectComponent }, // no me salio
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  //{ path: '', redirectTo: '', pathMatch: 'full' }, //funciona?
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [PortfolioService],
})
export class AppRoutingModule {}
