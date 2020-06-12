import { Component, OnInit } from '@angular/core';
import { RoutineService } from "../../services/routine.service"; 
import { Routine } from 'src/app/models/routine';

@Component({
  selector: 'app-routines-list-coach',
  templateUrl: './routines-list-coach.component.html',
  styleUrls: ['./routines-list-coach.component.css']
})
export class RoutinesListCoachComponent implements OnInit {

  public myself = {_id: '', username: '', name:'', token:'', rol:''};
  public title:string = "My Routines";

  constructor(public routineService:RoutineService) {
    this.getRoutines();
  }

  ngOnInit(): void {
  }

  // get caoch Routines
  getRoutines(){
    this.routineService.getRoutinesByCoach(this.myself._id).subscribe(res =>{
      this.routineService.routines = res as Routine[];
    });
  }

}
