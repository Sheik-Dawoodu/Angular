import { TestBed } from '@angular/core/testing';

import { ViewApiService } from './view-api.service';

describe('ViewApiService', () => {
  let service: ViewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
