import { TestBed } from '@angular/core/testing';

import { GanadorService } from './ganador.service';

describe('ResultadosVotacionesService', () => {
  let service: GanadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GanadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});