import { TestBed } from '@angular/core/testing';

import { IngrPerfilServService } from './ingr-perfil-serv.service';

describe('IngrPerfilServService', () => {
  let service: IngrPerfilServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngrPerfilServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
