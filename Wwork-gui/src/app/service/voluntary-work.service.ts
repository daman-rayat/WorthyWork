import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoluntaryWork } from '../model/voluntary-work';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryWorkService {

  voluntaryWork : Array<VoluntaryWork> = [
    { title: 'Lawn Cleaning', description: 'Lawn Cleaning', date : '15/02/2018', time : '13:00', location: 'Windsor', contactDetails : '123456'},
    { title: 'Clean Sidewalk', description: 'Clean Sidewalk from Snow', date : '19/02/2018', time : '10:00', location: 'Toronto', contactDetails : '123456'},
  ]

  constructor(private http: HttpClient) { }

  getVoluntaryWorkDetails(){
    //return this.http.get("URL").pipe(map(Response => Response));
    return of(this.voluntaryWork);
  }
}
