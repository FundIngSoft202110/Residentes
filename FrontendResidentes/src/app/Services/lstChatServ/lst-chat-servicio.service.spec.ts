import { TestBed } from '@angular/core/testing';

import { LstChatServicioService } from './lst-chat-servicio.service';

describe('LstChatServicioService', () => {
  let service: LstChatServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LstChatServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
