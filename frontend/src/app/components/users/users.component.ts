import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service"; 
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

declare var $:any;
declare var M:any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: []
})
export class UsersComponent implements OnInit {

  public editmode: boolean = false;
  public title:string = "Users";

  constructor(public userService:UserService) {
     this.getUsers();
   }

  ngOnInit(): void {
    $(document).ready(function(){
      $('select').formSelect();
    });
  }

  // Create new User
  createUser(form?:NgForm){
    if (form.valid == true){
      if (this.userService.selectedUser._id == ''
      || this.userService.selectedUser._id == undefined){
        form.value.active = form.value.active == 'true' ? true : false;
        this.userService.postUser(form.value).subscribe(res => {
          M.toast({html: 'Save Successfuly'});
          this.resetForm(form);
          this.getUsers();
        });
      }else{M.toast({html: 'sorry, id must be null'})}
    }else{M.toast({html: 'Invalid form'})}
  }

  // update User
  updateUser(form?:NgForm){
    if (form.valid == true){
      if (this.userService.selectedUser._id != ''
      && this.userService.selectedUser._id != undefined){
        form.value._id = this.userService.selectedUser._id;
        form.value.__v = this.userService.selectedUser.__v;
        form.value.active = form.value.active == 'true' ? true : false;
        this.userService.putUser(form.value).subscribe(res =>{
          M.toast({html: 'Update Successfuly'});
          this.getUsers();
        });
        
      }else{
        M.toast({html: 'sorry, you must select an id'});
      }
      
    }else{M.toast({html: 'Error'})}
  }

  // get all Users
  getUsers(){
    this.userService.getUsers().subscribe(res =>{
      this.userService.users = res as User[];
    });
  }

  // Clear form
  resetForm(form?:NgForm){
    
    this.userService.selectedUser = new User();
    if (form){
      form.reset();
    }
    this.editmode = false;
  }

  editUser(user:User){
    this.userService.selectedUser = user;
    this.editmode = true;

    //manual fix of selects
    $("#myrolselect").val(this.userService.selectedUser.role);
    $("#myActSelect").val(this.userService.selectedUser.active);
    $('select').formSelect()
    setTimeout(() => 
    {
      $('select').formSelect();
    },
    10);
    
  }

  //delete one User by document id
  deleteUser(_id:string, form?:NgForm){
    if(confirm('Are you sure, that you want to delete it')){
      this.userService.deleteUser(_id).subscribe( res => {
        this.resetForm(form);
        this.getUsers();
        M.toast({html: 'User deleted successfully'});
      }, err =>{
        M.toast({html: 'Error'});
      });
    }
  }

  eventChange(){
  }

}
