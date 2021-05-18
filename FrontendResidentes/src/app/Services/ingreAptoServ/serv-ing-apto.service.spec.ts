import { TestBed } from '@angular/core/testing';

import { ServIngAptoService } from './serv-ing-apto.service';

describe('ServIngAptoService', () => {
  let service: ServIngAptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServIngAptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
