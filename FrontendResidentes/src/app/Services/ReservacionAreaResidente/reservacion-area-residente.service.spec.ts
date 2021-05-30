import { TestBed } from '@angular/core/testing';

import { ReservacionAreaResidenteService } from './reservacion-area-residente.service';

describe('ReservacionAreaResidenteService', () => {
  let service: ReservacionAreaResidenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservacionAreaResidenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
