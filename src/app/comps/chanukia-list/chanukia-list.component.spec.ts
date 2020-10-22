import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanukiaListComponent } from './chanukia-list.component';

describe('ChanukiaListComponent', () => {
  let component: ChanukiaListComponent;
  let fixture: ComponentFixture<ChanukiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanukiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanukiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
