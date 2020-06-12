import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesListCoachComponent } from './routines-list-coach.component';

describe('RoutinesListCoachComponent', () => {
  let component: RoutinesListCoachComponent;
  let fixture: ComponentFixture<RoutinesListCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesListCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesListCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
