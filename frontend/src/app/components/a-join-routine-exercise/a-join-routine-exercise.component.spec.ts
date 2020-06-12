import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AJoinRoutineExerciseComponent } from './a-join-routine-exercise.component';

describe('AJoinRoutineExerciseComponent', () => {
  let component: AJoinRoutineExerciseComponent;
  let fixture: ComponentFixture<AJoinRoutineExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AJoinRoutineExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AJoinRoutineExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
