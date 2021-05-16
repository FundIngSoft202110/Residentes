import { TestBed } from '@angular/core/testing';

import { AgregarFechaAreaService } from './agregar-fecha-area.service';

describe('AgregarFechaAreaService', () => {
  let service: AgregarFechaAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarFechaAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
