import { TestBed } from '@angular/core/testing';

import { QuejasAdminService } from './quejas-admin.service';

describe('QuejasAdminService', () => {
  let service: QuejasAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuejasAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
