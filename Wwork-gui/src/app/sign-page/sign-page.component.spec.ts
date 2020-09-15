import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignPageComponent } from './sign-page.component';

describe('SignPageComponent', () => {
  let component: SignPageComponent;
  let fixture: ComponentFixture<SignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

                  imports: [ 
                    RouterModule.forRoot([]),
                    HttpClientModule
                  ],

      declarations: [ SignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
