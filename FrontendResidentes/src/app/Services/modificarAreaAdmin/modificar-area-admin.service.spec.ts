import { TestBed } from '@angular/core/testing';

import { ModificarAreaAdminService } from './modificar-area-admin.service';

describe('ModificarAreaAdminService', () => {
  let service: ModificarAreaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarAreaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
