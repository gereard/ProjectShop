import { TestBed } from '@angular/core/testing';

import { ProductesService } from './productes.service';

describe('ProductesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductesService = TestBed.get(ProductesService);
    expect(service).toBeTruthy();
  });
});
