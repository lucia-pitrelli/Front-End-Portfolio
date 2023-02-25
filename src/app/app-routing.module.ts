import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ChangeProjectComponent } from './components/change-project/change-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';
import { ProjectComponent } from './components/project/project.component';

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
  { path: 'deleteProject', component: DeleteProjectComponent },
  { path: 'project/:id', component: ProjectComponent }, // no me salio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
