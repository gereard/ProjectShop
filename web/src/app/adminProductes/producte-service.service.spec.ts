import { TestBed } from '@angular/core/testing';

import { ProducteServiceService } from './producte-service.service';

describe('ProducteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducteServiceService = TestBed.get(ProducteServiceService);
    expect(service).toBeTruthy();
  });
});
