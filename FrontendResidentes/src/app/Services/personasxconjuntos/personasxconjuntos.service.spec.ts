import { TestBed } from '@angular/core/testing';

import { PersonasxconjuntosService } from './personasxconjuntos.service';

describe('PersonasxconjuntosService', () => {
  let service: PersonasxconjuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasxconjuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
