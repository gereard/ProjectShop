import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaAdminComponent } from './subcategoria-admin.component';

describe('SubcategoriaAdminComponent', () => {
  let component: SubcategoriaAdminComponent;
  let fixture: ComponentFixture<SubcategoriaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
