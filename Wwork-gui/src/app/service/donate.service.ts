import { Injectable } from '@angular/core';
import { Donate } from '../model/donate';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  donate: Array<Donate> = [
    { itemType: 'Bed', description: 'Queen Size Bed', contactDetails : '123456'},
    { itemType: 'Table', description: 'Dining Table', contactDetails : '123456'},
    { itemType: 'Food', description: 'Fast Food', contactDetails : '123456'},
    { itemType: 'Fan', description: 'Oscillating Fan', contactDetails : '123456'}
  ];

  constructor(private http: HttpClient) { }

  getDonateDetails(){
    //return this.http.get("URL").pipe(map(Response => Response));

    return of(this.donate);
  }

}
