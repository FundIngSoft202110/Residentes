import { TestBed } from '@angular/core/testing';

import { ClaveContraService } from './clave-contra.service';

describe('ClaveContraService', () => {
  let service: ClaveContraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaveContraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
