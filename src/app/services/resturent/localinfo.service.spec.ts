import { TestBed } from '@angular/core/testing';

import { LocalinfoService } from './localinfo.service';

describe('LocalinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalinfoService = TestBed.get(LocalinfoService);
    expect(service).toBeTruthy();
  });
});
