import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidushComponent } from './kidush.component';

describe('KidushComponent', () => {
  let component: KidushComponent;
  let fixture: ComponentFixture<KidushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
