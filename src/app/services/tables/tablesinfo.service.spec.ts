import { TestBed } from '@angular/core/testing';

import { TablesinfoService } from './tablesinfo.service';

describe('TablesinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablesinfoService = TestBed.get(TablesinfoService);
    expect(service).toBeTruthy();
  });
});
