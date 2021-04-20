import { TestBed } from '@angular/core/testing';

import { AsambleaSubirPropuestaService } from './asamblea-subir-propuesta.service';

describe('AsambleaSubirPropuestaService', () => {
  let service: AsambleaSubirPropuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsambleaSubirPropuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
