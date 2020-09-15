import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  checkUserCredential(userName : String, password : String){
    if(userName == "test"){
      if(password == "test"){
        console.log("Login Successful");
      }
      else{
        console.log("password wrong");
      }
    }
    else{
      console.log("username wrong");
    }
  }
}
