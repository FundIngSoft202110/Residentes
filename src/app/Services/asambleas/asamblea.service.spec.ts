import { TestBed } from '@angular/core/testing';

import { AsambleaService } from './asamblea-subir-propuesta.service';

describe('AsambleaSubirPropuestaService', () => {
  let service: AsambleaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsambleaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
