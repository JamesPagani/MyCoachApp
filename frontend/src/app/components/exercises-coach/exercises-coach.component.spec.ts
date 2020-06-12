import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesCoachComponent } from './exercises-coach.component';

describe('ExercisesCoachComponent', () => {
  let component: ExercisesCoachComponent;
  let fixture: ComponentFixture<ExercisesCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
