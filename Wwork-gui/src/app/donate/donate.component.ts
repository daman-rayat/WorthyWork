import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donate } from '../model/donate';
import { DonateService } from '../service/donate.service';

@Component({
  selector: 'donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private donateService: DonateService) { }

    donates : Array<Donate> = [];

  ngOnInit(): void {

    this.donateService.getDonateDetails()
    .subscribe(donate => {
      this.donates = donate;
    });

  }

}
