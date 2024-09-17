import { TestBed } from '@angular/core/testing';

import { DistrosService } from './distros.service';

describe('DistrosService', () => {
  let service: DistrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
