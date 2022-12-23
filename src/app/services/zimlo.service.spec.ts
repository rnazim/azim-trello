import { TestBed } from '@angular/core/testing';

import { ZimloService } from './zimlo.service';

describe('ZimloService', () => {
  let service: ZimloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZimloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
