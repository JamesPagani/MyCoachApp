import { Component, OnInit } from '@angular/core';
import { RoutineService } from "../../services/routine.service"; 
import { Routine } from 'src/app/models/routine';
import { MyUser } from "../../models/my-user";

@Component({
  selector: 'app-routines-list-coach',
  templateUrl: './routines-list-coach.component.html',
  styleUrls: ['./routines-list-coach.component.css']
})
export class RoutinesListCoachComponent implements OnInit {
  public myself:MyUser;
  public title:string = "My Routines";

  constructor(public routineService:RoutineService) {
    this.myself = JSON.parse(localStorage.getItem('myself'));
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
