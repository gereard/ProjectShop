import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductesComponent } from './edit-productes.component';

describe('EditProductesComponent', () => {
  let component: EditProductesComponent;
  let fixture: ComponentFixture<EditProductesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
