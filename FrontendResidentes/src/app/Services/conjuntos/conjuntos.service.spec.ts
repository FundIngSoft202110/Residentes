import { TestBed } from '@angular/core/testing';

import { ConjuntosService } from './conjuntos.service';

describe('ConjuntosService', () => {
  let service: ConjuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
