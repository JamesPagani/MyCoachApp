import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesCoachComponent } from './routines-coach.component';

describe('RoutinesCoachComponent', () => {
  let component: RoutinesCoachComponent;
  let fixture: ComponentFixture<RoutinesCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
