import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { RouterModule } from '@angular/router';
import { CarPoolingComponent } from './car-pooling.component';
import { HttpClientModule } from '@angular/common/http';

describe('CarPoolingComponent', () => {
  let component: CarPoolingComponent;
  let fixture: ComponentFixture<CarPoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [ 
        RouterModule.forRoot([]),
        HttpClientModule
      ],

      declarations: [ CarPoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
