import { TestBed } from '@angular/core/testing';

import { NuevoconjuservService } from './nuevoconjuserv.service';

describe('NuevoconjuservService', () => {
  let service: NuevoconjuservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoconjuservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
