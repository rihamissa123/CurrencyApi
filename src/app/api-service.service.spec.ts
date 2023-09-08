import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
