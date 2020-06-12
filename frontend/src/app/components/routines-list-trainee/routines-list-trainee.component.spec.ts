import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesListTraineeComponent } from './routines-list-trainee.component';

describe('RoutinesTraineeComponent', () => {
  let component: RoutinesListTraineeComponent;
  let fixture: ComponentFixture<RoutinesListTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesListTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesListTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
