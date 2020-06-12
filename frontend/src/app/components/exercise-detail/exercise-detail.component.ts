import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ExerciseService } from "../../services/exercise.service";
import { Exercise } from "../../models/exercise";

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  exercise:Exercise;
  public title:string = "Exercise Detail";

  constructor( private activatedRoute:ActivatedRoute,
    private _exerciseService:ExerciseService
    ) {
      this.exercise = new Exercise();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
     this._exerciseService.getExercise(params['id']).subscribe(res => {
        this.exercise = res as Exercise;
      })
      
    });
  }

}
