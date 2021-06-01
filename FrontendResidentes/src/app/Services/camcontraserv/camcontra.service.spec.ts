import { TestBed } from '@angular/core/testing';

import { CamcontraService } from './camcontra.service';

describe('CamcontraService', () => {
  let service: CamcontraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamcontraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
