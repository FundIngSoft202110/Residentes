import { TestBed } from '@angular/core/testing';

import { selConjService } from './seleccion-conj-serv.service';

describe('selConjService', () => {
  let service: selConjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(selConjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
