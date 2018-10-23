import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteDetallComponent } from './producte-detall.component';

describe('ProducteDetallComponent', () => {
  let component: ProducteDetallComponent;
  let fixture: ComponentFixture<ProducteDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducteDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
