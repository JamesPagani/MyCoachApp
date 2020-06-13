import { Component, OnInit } from '@angular/core';
import { RoutineService } from "../../services/routine.service"; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Routine } from 'src/app/models/routine';
import { MyUser } from "../../models/my-user";

declare var $:any;
declare var M:any;

@Component({
  selector: 'app-routines-coach',
  templateUrl: './routines-coach.component.html',
  styleUrls: ['./routines-coach.component.css']
})
export class RoutinesCoachComponent implements OnInit {
  public myself:MyUser;
  public editmode: boolean = false;
  public title:string = "Routine Management";
  form1: FormGroup;

  constructor(public routineService:RoutineService) {
    this.myself = JSON.parse(localStorage.getItem('myself'));
    this.form1 = new FormGroup ({
      'name': new FormControl('', Validators.required),
      'days': new FormGroup({
        'monday': new FormControl(false),
        'tuesday': new FormControl(false),
        'wednesday': new FormControl(false),
        'thursday': new FormControl(false),
        'friday': new FormControl(false),
        'saturday': new FormControl(false),
        'sunday': new FormControl(false),
      })
    });
    this.getRoutines();
   }

  ngOnInit(): void {
    $(document).ready(function(){
      $('select').formSelect();
    });
  }

  // Create new Routine
  createRoutine(form?:FormGroup){
    if (form.valid == true){
      if (this.routineService.selectedRoutine._id == ''
      || this.routineService.selectedRoutine._id == undefined){
        form.value.coach = this.myself._id;
        form.value.active = true;

        this.routineService.postRoutine(form.value).subscribe(res => {
          M.toast({html: 'Save Successfuly'});
          this.resetForm(form);
          this.getRoutines();
        });
      }else{M.toast({html: 'sorry, id must be null'})}
    }else{M.toast({html: 'Invalid form'})}
  }

  // update Routine
  updateRoutine(form?:FormGroup){
    if (form.valid == true){
      if (this.routineService.selectedRoutine._id != ''
      && this.routineService.selectedRoutine._id != undefined){
        form.value._id = this.routineService.selectedRoutine._id;
        form.value.active = this.routineService.selectedRoutine.active;
        form.value.coach = this.myself._id;
        this.routineService.putRoutine(form.value).subscribe(res =>{
          M.toast({html: 'Update Successfuly'});
          this.getRoutines();
        });
        
      }else{
        M.toast({html: 'sorry, you must select an id'});
      }
      
    }else{M.toast({html: 'Error'})}
  }

  // get all Routines
  getRoutines(){
    this.routineService.getRoutinesByCoach(this.myself._id).subscribe(res =>{
      let r = res as Routine[];
      r.map( (x:any)=>{ 
        if( x.coach?._id != undefined){
          x.coach =  x.coach._id
        }
        return x
     });
      this.routineService.routines = r as Routine[];
    });
  }

  // Clear form
  resetForm(form?:FormGroup){
    
    this.routineService.selectedRoutine = new Routine();
    if (form){
      form.reset();
    }
    this.editmode = false;
    this.getRoutines();
   
  }

  editRoutine(routine:Routine){
    this.routineService.selectedRoutine = routine;
    this.editmode = true;
  }

  //delete one Routine by document id
  fakeDeleteRoutine(routine:Routine){
    routine.active = false;
    if(confirm('Are you sure, that you want to delete it')){
      this.routineService.putRoutine(routine).subscribe( res => {
        this.resetForm(this.form1);
        this.getRoutines();
        M.toast({html: 'Routines deleted successfully'});
      }, err =>{
        M.toast({html: 'Error'});
      });
    }
  }

}
