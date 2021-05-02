import { TestBed } from '@angular/core/testing';

import { AgregarAreaAdminServiceService } from './agregar-area-admin-service.service';

describe('AgregarAreaAdminServiceService', () => {
  let service: AgregarAreaAdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAreaAdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
