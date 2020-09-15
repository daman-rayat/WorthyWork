import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css']
})
export class SignPageComponent implements OnInit {

  username : String = '';
  email : String = '';
  password : String = ''; 

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private signupService : SignupService) { }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(["dashboard"]);
    //this.signupService.userSignup(this.email, this.password, this.rpassword);
  }

}
