import { TestBed } from '@angular/core/testing';

import { AcercaDeNosotrosService } from './acerca-de-nosotros.service';

describe('AcercaDeNosotrosService', () => {
  let service: AcercaDeNosotrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercaDeNosotrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
