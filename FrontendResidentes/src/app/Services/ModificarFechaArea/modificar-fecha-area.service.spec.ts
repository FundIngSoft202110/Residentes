import { TestBed } from '@angular/core/testing';

import { ModificarFechaAreaService } from './modificar-fecha-area.service';

describe('ModificarFechaAreaService', () => {
  let service: ModificarFechaAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarFechaAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
