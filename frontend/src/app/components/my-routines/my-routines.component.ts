import { Component, OnInit } from '@angular/core';
import { RoutineService } from "../../services/routine.service"; 
import { Routine } from 'src/app/models/routine';

@Component({
  selector: 'app-my-routines',
  templateUrl: './my-routines.component.html',
  styleUrls: ['./my-routines.component.css']
})
export class MyRoutinesComponent implements OnInit {

  public title:string ="My Routines";

  constructor(public routineService:RoutineService) {
    this.getRoutines();
  }

  ngOnInit(): void {
  }

  // get all Routines
  getRoutines(){
    this.routineService.getRoutines().subscribe(res =>{
      this.routineService.routines = res as Routine[];
    });
  }

}
