import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PortfolioService } from './services/portfolio.service'; //ver
import { HttpClientModule } from '@angular/common/http'; //ver
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //ver
//import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  }, // visit home only if authenticated

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
