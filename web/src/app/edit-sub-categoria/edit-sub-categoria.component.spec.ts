import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubCategoriaComponent } from './edit-sub-categoria.component';

describe('EditSubCategoriaComponent', () => {
  let component: EditSubCategoriaComponent;
  let fixture: ComponentFixture<EditSubCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
