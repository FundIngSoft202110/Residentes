import { TestBed } from '@angular/core/testing';

import { CodficarService } from './codficar.service';

describe('CodficarService', () => {
  let service: CodficarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodficarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
