import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesListCoachComponent } from './exercises-list-coach.component';

describe('ExercisesListCoachComponent', () => {
  let component: ExercisesListCoachComponent;
  let fixture: ComponentFixture<ExercisesListCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesListCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesListCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
