import { TestBed } from '@angular/core/testing';

import { DivisionInfoService } from './division-info.service';

describe('DivisionInfoService', () => {
  let service: DivisionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
