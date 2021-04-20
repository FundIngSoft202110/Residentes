import { TestBed } from '@angular/core/testing';

import { ResultadosVotacionesService } from './resultados-votaciones.service';

describe('ResultadosVotacionesService', () => {
  let service: ResultadosVotacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosVotacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
