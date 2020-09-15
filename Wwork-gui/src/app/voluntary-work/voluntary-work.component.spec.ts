import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryWorkComponent } from './voluntary-work.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
  

describe('VoluntaryWorkComponent', () => {
  let component: VoluntaryWorkComponent;
  let fixture: ComponentFixture<VoluntaryWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

            imports: [ 
              RouterModule.forRoot([]),
              HttpClientModule
            ],

      declarations: [ VoluntaryWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
