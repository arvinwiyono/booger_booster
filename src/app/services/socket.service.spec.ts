import { TestBed, inject } from '@angular/core/testing';

import { SocketService } from './socket.service';

describe('SocketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService]
    });
  });

  it('should ...', inject([SocketService], (service: SocketService) => {
    expect(service).toBeTruthy();
  }));
});
