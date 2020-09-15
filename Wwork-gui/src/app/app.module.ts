import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginServiceService } from './service/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarPoolingComponent } from './car-pooling/car-pooling.component';
import { VoluntaryWorkComponent } from './voluntary-work/voluntary-work.component';
import { DonateComponent } from './donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignPageComponent,
    WelcomePageComponent,
    DashboardComponent,
    CarPoolingComponent,
    VoluntaryWorkComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
