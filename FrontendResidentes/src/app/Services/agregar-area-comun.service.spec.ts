import { TestBed } from '@angular/core/testing';

import { AgregarAreaComunService } from './agregar-area-comun.service';

describe('AgregarAreaComunService', () => {
  let service: AgregarAreaComunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAreaComunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
