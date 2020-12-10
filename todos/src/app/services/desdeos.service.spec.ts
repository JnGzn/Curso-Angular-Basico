import { TestBed } from '@angular/core/testing';

import { DesdeosService } from './desdeos.service';

describe('DesdeosService', () => {
  let service: DesdeosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesdeosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
