import { TestBed } from '@angular/core/testing';

import { Service as Service } from './service.service';

describe('SeriviceService', () => {
  let service: Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
