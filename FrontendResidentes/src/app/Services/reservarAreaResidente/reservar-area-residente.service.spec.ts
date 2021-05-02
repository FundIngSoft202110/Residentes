import { TestBed } from '@angular/core/testing';

import { ReservarAreaResidenteService } from './reservar-area-residente.service';

describe('ReservarAreaResidenteService', () => {
  let service: ReservarAreaResidenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservarAreaResidenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
