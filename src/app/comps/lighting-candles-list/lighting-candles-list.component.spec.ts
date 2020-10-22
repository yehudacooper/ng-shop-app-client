import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingCandlesListComponent } from './lighting-candles-list.component';

describe('LightingCandlesListComponent', () => {
  let component: LightingCandlesListComponent;
  let fixture: ComponentFixture<LightingCandlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingCandlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingCandlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
