import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Update2CompComponent } from './update2-comp.component';

describe('Update2CompComponent', () => {
  let component: Update2CompComponent;
  let fixture: ComponentFixture<Update2CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update2CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
