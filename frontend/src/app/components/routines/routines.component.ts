import { Component, OnInit } from '@angular/core';
import { RoutineService } from "../../services/routine.service"; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Routine } from 'src/app/models/routine';

declare var $:any;
declare var M:any;

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  public editmode: boolean = false;
  public title:string = "Routines";
  form1: FormGroup;

  constructor(public routineService:RoutineService) {
    this.form1 = new FormGroup ({
      'name': new FormControl('', Validators.required),
      'exercise': new FormControl(''),
      'coachId': new FormControl('', Validators.required),
      'active': new FormControl(false, Validators.required),
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
    /*
    In case ngmodel is deprecated use this example
    this.form1.get("name").valueChanges.subscribe(x => {
      this.routineService.selectedRoutine.name = x;
      console.log(this.routineService.selectedRoutine);
    });*/
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
        form.value.active = form.value.active == 'true' ||  form.value.active === true ? true : false;
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
        form.value.__v = this.routineService.selectedRoutine.__v;
        form.value.active = form.value.active == 'true' ||  form.value.active === true ? true : false;
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
    this.routineService.getRoutines().subscribe(res =>{
      this.routineService.routines = res as Routine[];
    });
  }

  // Clear form
  resetForm(form?:FormGroup){
    
    this.routineService.selectedRoutine = new Routine();
    if (form){
      form.reset();
    }
    this.editmode = false;
  }

  editRoutine(routine:Routine){
    this.routineService.selectedRoutine = routine;
    this.editmode = true;

    //manual fix of selects
    $("#myActSelect").val(this.routineService.selectedRoutine.active);
    $('select').formSelect()
    setTimeout(() => 
    {
      $('select').formSelect();
    },
    10);
    
  }

  //delete one Routine by document id
  deleteRoutine(_id:string){
    if(confirm('Are you sure, that you want to delete it')){
      this.routineService.deleteRoutine(_id).subscribe( res => {
        this.resetForm(this.form1);
        this.getRoutines();
        M.toast({html: 'Routines deleted successfully'});
      }, err =>{
        M.toast({html: 'Error'});
      });
    }
  }

}
