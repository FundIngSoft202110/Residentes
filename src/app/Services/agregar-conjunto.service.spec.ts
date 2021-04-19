import { TestBed } from '@angular/core/testing';

import { AgregarConjuntoService } from './agregar-conjunto.service';

describe('AgregarConjuntoService', () => {
  let service: AgregarConjuntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarConjuntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
