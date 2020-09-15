import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  userSignup(email : String, password : String, rpassword : String){
    console.log(email," Signup Email");
    console.log(password,"password");
    console.log(rpassword,"rpassword");
  }

}
