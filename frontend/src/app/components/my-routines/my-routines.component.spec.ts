import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRoutinesComponent } from './my-routines.component';

describe('MyRoutinesComponent', () => {
  let component: MyRoutinesComponent;
  let fixture: ComponentFixture<MyRoutinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRoutinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
