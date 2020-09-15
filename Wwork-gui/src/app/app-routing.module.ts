import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarPoolingComponent } from './car-pooling/car-pooling.component';
import { DonateComponent } from './donate/donate.component';
import { VoluntaryWorkComponent } from './voluntary-work/voluntary-work.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component:  WelcomePageComponent},
  { path: 'login', component:  LoginPageComponent},
  { path: 'signup', component:  SignPageComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'carpooling', component:  CarPoolingComponent},
  { path: 'donate', component:  DonateComponent},
  { path: 'voluntarywork', component:  VoluntaryWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








