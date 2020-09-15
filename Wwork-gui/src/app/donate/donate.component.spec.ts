import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateComponent } from './donate.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
      

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      
            imports: [ 
              RouterModule.forRoot([]),
              HttpClientModule
            ],

      declarations: [ DonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
