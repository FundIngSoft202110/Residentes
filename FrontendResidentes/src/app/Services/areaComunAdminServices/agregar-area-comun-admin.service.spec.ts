import { TestBed } from '@angular/core/testing';

import { AgregarAreaComunAdminService } from './agregar-area-comun-admin.service';

describe('AgregarAreaComunAdminService', () => {
  let service: AgregarAreaComunAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAreaComunAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
