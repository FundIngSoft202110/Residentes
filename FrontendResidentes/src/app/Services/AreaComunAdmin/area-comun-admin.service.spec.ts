import { TestBed } from '@angular/core/testing';

import { AreaComunAdminService } from './area-comun-admin.service';

describe('AreaComunAdminService', () => {
  let service: AreaComunAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaComunAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
