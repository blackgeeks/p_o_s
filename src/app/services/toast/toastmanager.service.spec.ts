import { TestBed } from '@angular/core/testing';

import { ToastmanagerService } from './toastmanager.service';

describe('ToastmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastmanagerService = TestBed.get(ToastmanagerService);
    expect(service).toBeTruthy();
  });
});
