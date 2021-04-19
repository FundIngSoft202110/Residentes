import { TestBed } from '@angular/core/testing';

import { RegistroServicioService } from './registro-servicio.service';

describe('RegistroServicioService', () => {
  let service: RegistroServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
