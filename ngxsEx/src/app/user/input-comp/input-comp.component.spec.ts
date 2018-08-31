import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompComponent } from './input-comp.component';

describe('InputCompComponent', () => {
  let component: InputCompComponent;
  let fixture: ComponentFixture<InputCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
