import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetallComponent } from './orders-detall.component';

describe('OrdersDetallComponent', () => {
  let component: OrdersDetallComponent;
  let fixture: ComponentFixture<OrdersDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
