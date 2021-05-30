import { TestBed } from '@angular/core/testing';

import { AreaComunResidenteService } from './area-comun-residente.service';

describe('AreaComunResidenteService', () => {
  let service: AreaComunResidenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaComunResidenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
