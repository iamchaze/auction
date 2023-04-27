import { TestBed } from '@angular/core/testing';

import { CategorizeService } from './categorize.service';

describe('CategorizeService', () => {
  let service: CategorizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
