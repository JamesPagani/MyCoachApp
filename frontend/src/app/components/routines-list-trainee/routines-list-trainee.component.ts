import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Routine } from 'src/app/models/routine';

@Component({
  selector: 'app-routines-list-trainee',
  templateUrl: './routines-list-trainee.component.html',
  styleUrls: ['./routines-list-trainee.component.css']
})

export class RoutinesListTraineeComponent implements OnInit {
  public myself = {_id: '', username: '', name:'', token:''};
  public title:string = "My Routines";
  public routines: Routine[];

  constructor(public userService:UserService) {
    this.getRoutines();
   }

  ngOnInit(): void {
  }

  // get Routines By User
  getRoutines(){
    this.userService.getUserByIdCustomer(this.myself._id).subscribe(res =>{
      this.routines = res as Routine[];
    });
  }

}
