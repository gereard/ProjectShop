import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotrolPanelComponent } from './cotrol-panel.component';

describe('CotrolPanelComponent', () => {
  let component: CotrolPanelComponent;
  let fixture: ComponentFixture<CotrolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotrolPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotrolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
