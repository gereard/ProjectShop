import { TestBed } from '@angular/core/testing';

import { CategoriesAdminService } from './categories-admin.service';

describe('CategoriesAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesAdminService = TestBed.get(CategoriesAdminService);
    expect(service).toBeTruthy();
  });
});
