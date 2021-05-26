import { TestBed } from '@angular/core/testing';

import { ModificarReservaAreaService } from './modificar-reserva-area.service';

describe('ModificarReservaAreaService', () => {
  let service: ModificarReservaAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarReservaAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
