import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarPooling } from '../model/car-pooling';
import { of } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarPoolingService {

  carPools: Array<CarPooling> = [
    { carPoolID : 41, pickupLocation: 'Toronto', dropLocation: 'Windsor', status: 'yes', date : new Date('02/24/2018'), contactDetails : '123456'},
    { carPoolID : 2,pickupLocation: 'London', dropLocation: 'Toronto', status: 'yes', date : new Date('05/19/2019'), contactDetails : '156123'},
    { carPoolID : 3,pickupLocation: 'Brampton', dropLocation: 'Windsor', status: 'yes', date : new Date('02/28/2019'), contactDetails : '789464'},
    { carPoolID : 4, pickupLocation: 'Hamilton', dropLocation: 'Windsor', status: 'yes', date : new Date('06/05/2020'), contactDetails : '741852'},
  ];

  constructor(private http: HttpClient) { }

  getCarPoolingDetails(){
    //return this.http.get("URL").pipe(map(Response => Response));
    return of(this.carPools);
  }

  addCarPoolingDetails(newCarPoolData : CarPooling) : Observable<CarPooling>{
    // return this.http.post<CarPooling>("URL",newCarPoolData)
    // .pipe(map(Response => Response));
    return this.http.post<CarPooling>("URL",newCarPoolData, httpOptions)
               .pipe();
  }

  deleteCarPoolingData(id : Number){
    return this.http.delete("url", {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  })
  }
}
