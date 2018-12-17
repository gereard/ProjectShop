import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductesComponent } from './admin-productes.component';

describe('AdminProductesComponent', () => {
  let component: AdminProductesComponent;
  let fixture: ComponentFixture<AdminProductesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
