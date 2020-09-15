import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService,) { }

  email: string = '';
  password : string = '';

  loginData : Array<Login> = [];
  
  login(){
      if(this.email == "admin" && this.password == "admin")
      {
        this.router.navigate(["dashboard"]);
      }
      else{
        alert("Wrong Password. Please try again!")
        this.router.navigate(["login"]);
      }
    this.loginService.checkUserCredential(this.email, this.password);
  }


}
