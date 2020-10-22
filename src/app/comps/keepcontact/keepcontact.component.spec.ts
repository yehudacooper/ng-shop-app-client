import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepcontactComponent } from './keepcontact.component';

describe('KeepcontactComponent', () => {
  let component: KeepcontactComponent;
  let fixture: ComponentFixture<KeepcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
