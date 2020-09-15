import { Component, OnInit } from '@angular/core';
import { VoluntaryWorkService } from '../service/voluntary-work.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VoluntaryWork } from '../model/voluntary-work';

@Component({
  selector: 'voluntary-work',
  templateUrl: './voluntary-work.component.html',
  styleUrls: ['./voluntary-work.component.css']
})
export class VoluntaryWorkComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private voluntaryWorkService: VoluntaryWorkService) { }

    voluntaryWork : Array<VoluntaryWork> = [];

  ngOnInit(): void {
  
    this.voluntaryWorkService.getVoluntaryWorkDetails()
    .subscribe(voluntaryWork => {
      this.voluntaryWork = voluntaryWork;
    });

  }

}
