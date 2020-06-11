import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Routine } from '../models/routine';

@Injectable({
  providedIn: 'root'
})

export class RoutineService {
  selectedRoutine: Routine;
  routines: Routine[];

  readonly URL_API = 'http://localhost:3000/api/v1/routines'

  constructor(private http:HttpClient) {
    console.log("Routine service ON");
    this.selectedRoutine = new Routine();
    console.log(this.selectedRoutine);
   }

   getRoutines () {
    return this.http.get(this.URL_API);
  }

  postRoutine (routine: Routine) {
    return this.http.post(this.URL_API, routine);
  }

  putRoutine (routine: Routine) {
    return this.http.put(this.URL_API + `/${routine._id}`, routine);
  }

  deleteRoutine (_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
