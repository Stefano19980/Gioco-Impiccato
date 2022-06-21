import { TestBed } from '@angular/core/testing';

import { GiocoService } from './gioco.service';

describe('GiocoService', () => {
  let service: GiocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
