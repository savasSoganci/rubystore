import { TestBed } from '@angular/core/testing';

import { StoneContentService } from './stone-content.service';

describe('StoneContentService', () => {
  let service: StoneContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoneContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
