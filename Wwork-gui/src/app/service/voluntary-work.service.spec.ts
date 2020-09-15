import { TestBed } from '@angular/core/testing';

import { VoluntaryWorkService } from './voluntary-work.service';

describe('VoluntaryWorkService', () => {
  let service: VoluntaryWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoluntaryWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
