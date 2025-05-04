import { TestBed } from '@angular/core/testing';

import { RegionalEntityService } from './regional-entity.service';

describe('RegionalEntityService', () => {
  let service: RegionalEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionalEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
