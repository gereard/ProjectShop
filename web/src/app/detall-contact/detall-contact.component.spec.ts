import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallContactComponent } from './detall-contact.component';

describe('DetallContactComponent', () => {
  let component: DetallContactComponent;
  let fixture: ComponentFixture<DetallContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
