import { TestBed } from '@angular/core/testing';

import { TestToastService } from './test-toast.service';

describe('TestToastService', () => {
  let service: TestToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
