import { TestBed } from '@angular/core/testing';

import { BlockchainthwcoinService } from './blockchainthwcoin.service';

describe('BlockchainthwcoinService', () => {
  let service: BlockchainthwcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockchainthwcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
