import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyViewerComponent } from './currency-viewer.component';

describe('CurrencyViewerComponent', () => {
  let component: CurrencyViewerComponent;
  let fixture: ComponentFixture<CurrencyViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
