import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "../../services/exercise.service"; 
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-exercises-list-coach',
  templateUrl: './exercises-list-coach.component.html',
  styleUrls: ['./exercises-list-coach.component.css']
})
export class ExercisesListCoachComponent implements OnInit {

  public myself = {_id: '', username: '', name:'', token:'', rol:''};
  public title:string = "My Exercises";

  constructor(public exerciseService:ExerciseService) {
    this.getExercises();
   }

  ngOnInit(): void {
    
  }

  // get caoch Exercises
  getExercises(){
    this.exerciseService.getExerciseByUser(this.myself._id).subscribe(res =>{
      this.exerciseService.exercises = res as Exercise[];
    });
  }

}
