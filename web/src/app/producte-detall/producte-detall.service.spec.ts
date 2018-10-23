import { TestBed } from '@angular/core/testing';

import { ProducteDetallService } from './producte-detall.service';

describe('ProducteDetallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducteDetallService = TestBed.get(ProducteDetallService);
    expect(service).toBeTruthy();
  });
});
