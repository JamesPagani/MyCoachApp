import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Routine } from 'src/app/models/routine';
import { MyUser } from "../../models/my-user";

@Component({
  selector: 'app-routines-list-trainee',
  templateUrl: './routines-list-trainee.component.html',
  styleUrls: ['./routines-list-trainee.component.css']
})

export class RoutinesListTraineeComponent implements OnInit {
  public myself:MyUser;
  public title:string = "My Routines";
  public routines: Routine[];

  constructor(public userService:UserService) {
    this.myself = JSON.parse(localStorage.getItem('myself'));
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
