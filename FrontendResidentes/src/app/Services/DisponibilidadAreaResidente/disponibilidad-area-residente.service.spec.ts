import { TestBed } from '@angular/core/testing';

import { DisponibilidadAreaResidenteService } from './disponibilidad-area-residente.service';

describe('DisponibilidadAreaResidenteService', () => {
  let service: DisponibilidadAreaResidenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilidadAreaResidenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
