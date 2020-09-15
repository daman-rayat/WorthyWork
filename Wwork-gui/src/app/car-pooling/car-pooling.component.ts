import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarPoolingService } from '../service/car-pooling.service';
import { CarPooling } from '../model/car-pooling';


@Component({
  selector: 'car-pooling',
  templateUrl: './car-pooling.component.html',
  styleUrls: ['./car-pooling.component.css']
})
export class CarPoolingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private carPoolingService: CarPoolingService) { }

    carpool : Array<CarPooling> = [];
    deleteID : Number = 0;
    newCarPool = new CarPooling(0, null,null,null,new Date(),null);
    newUpdateCarPool = new CarPooling(0, null,null,null,new Date(),null);

  ngOnInit() {
    this.getCarPoolingData();
  }

  getCarPoolingData(){
    this.carPoolingService.getCarPoolingDetails()
    .subscribe(carpool => {
      this.carpool = carpool;
      console.log(carpool,"car pool data")
    });
  }

  setUpdateData(i : number, carPooling1 : CarPooling){

    console.log("value of i", i);
    console.log("CarPooling1 of i", carPooling1);

    this.newUpdateCarPool.carPoolID = carPooling1.carPoolID;
    this.newUpdateCarPool.contactDetails = carPooling1.contactDetails;
    this.newUpdateCarPool.date = carPooling1.date;
    this.newUpdateCarPool.dropLocation = carPooling1.dropLocation;
    this.newUpdateCarPool.pickupLocation = carPooling1.pickupLocation;
    this.newUpdateCarPool.status = carPooling1.status;
    
  }

  setData(carpool : CarPooling){
    console.log("set data", carpool);
    this.deleteID = carpool.carPoolID;
  }

  addCarPoolDetails(){
    console.log("new add" , this.newCarPool);
    this.carPoolingService.addCarPoolingDetails(this.newCarPool)
    .subscribe(() => {
      this.getCarPoolingData();
    });
  }

  deleteCarPoolDetails(){
    console.log("delete data");
    this.carPoolingService.deleteCarPoolingData(this.deleteID)
    .subscribe(() => {
      this.getCarPoolingData();
    });
  }

  updateData(){
  }
}
