import { TestBed } from '@angular/core/testing';

import { AgregarEmpldService } from './agregar-empld.service';

describe('AgregarEmpldService', () => {
  let service: AgregarEmpldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarEmpldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
