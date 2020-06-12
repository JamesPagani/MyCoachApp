import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {
  selectedExercise: Exercise;
  exercises: Exercise[];

  readonly URL_API = 'http://localhost:3000/api/v1/exercises'

  constructor(private http:HttpClient) {
    console.log("Exercise service ON");
    this.selectedExercise = new Exercise();
    console.log(this.selectedExercise);
   }

  getExercises () {
    return this.http.get(this.URL_API);
  }

  getExercise (_id: string) {
    return this.http.get(this.URL_API + `/${_id}`);
  }

  getExerciseByUser (_id: string) {
    return this.http.get(this.URL_API + '/users' +  `/${_id}`);
  }

  postExercise (exercise: Exercise) {
    return this.http.post(this.URL_API, exercise);
  }

  putExercise (exercise: Exercise) {
    return this.http.put(this.URL_API + `/${exercise._id}`, exercise);
  }

  deleteExercise (_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
