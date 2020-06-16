import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "../../services/exercise.service"; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Exercise } from 'src/app/models/exercise';
import { MyUser } from "../../models/my-user";

declare var $:any;
declare var M:any;


@Component({
  selector: 'app-exercises-coach',
  templateUrl: './exercises-coach.component.html',
  styleUrls: ['./exercises-coach.component.css']
})
export class ExercisesCoachComponent implements OnInit {
  public myself:MyUser;
  public editmode: boolean = false;
  form1: FormGroup;
  public title:string = "Exercise Management";

  constructor(public exerciseService:ExerciseService) {
    this.myself = JSON.parse(localStorage.getItem('myself'));
    this.form1 = new FormGroup ({
      'name': new FormControl('', Validators.required),
      'description': new FormControl(''),
      'quantity': new FormControl(1),
      'repetitions': new FormControl(1),
      'url': new FormControl('')
    });
    this.getExercises();
   }

  ngOnInit(): void {
    $(document).ready(function(){
      $('select').formSelect();
    });
  }

 

  // Create new Exercise
  createExercise(form?:FormGroup){
    if (form.valid == true){
      if (this.exerciseService.selectedExercise._id == ''
      || this.exerciseService.selectedExercise._id == undefined){
        form.value.active = true;
        form.value.coach = this.myself._id;

        this.exerciseService.postExercise(form.value).subscribe(res => {
          M.toast({html: 'Save Successfuly'});
          this.resetForm(form);
          this.getExercises();
        });
      }else{M.toast({html: 'sorry, id must be null'})}
    }else{M.toast({html: 'Invalid form'})}
  }

  // update Exercise
  updateExercise(form?:FormGroup){
    if (form.valid == true){
      if (this.exerciseService.selectedExercise._id != ''
      && this.exerciseService.selectedExercise._id != undefined){
        form.value._id = this.exerciseService.selectedExercise._id;
        form.value.active = this.exerciseService.selectedExercise.active;
        form.value.coach = this.myself._id;
        this.exerciseService.putExercise(form.value).subscribe(res =>{
          M.toast({html: 'Update Successfuly'});
          this.getExercises();
        });
        
      }else{
        M.toast({html: 'sorry, you must select an id'});
      }
      
    }else{M.toast({html: 'Error'})}
  }

  // get all Exercises
  getExercises(){
    this.exerciseService.getExerciseByUser(this.myself._id).subscribe(res =>{
      this.exerciseService.exercises = res as Exercise[];
    });
  }

  // Clear form
  resetForm(form?:FormGroup){
    
    this.exerciseService.selectedExercise = new Exercise();
    if (form){
      form.reset();
    }
    this.refreshSelects();
    this.editmode = false;
    this.getExercises();
  }

  editExercise(exercise:Exercise){
    this.exerciseService.selectedExercise = exercise;
    this.editmode = true;
    this.refreshSelects();
  }

  //manual fix of selects
  refreshSelects(){
    $("#myActSelect").val(this.exerciseService.selectedExercise.active);
    $('select').formSelect()
    setTimeout(() => 
    {
      $('select').formSelect();
    },
    10);
  }

  // delete one Exercise by document ID
  fakeDeleteExercise(exercise:Exercise){
    if(confirm('Are you sure, that you want to delete it')){
      exercise.active = false;
      this.exerciseService.putExercise(exercise).subscribe( res => {
        this.resetForm(this.form1);
        this.getExercises();
        M.toast({html: 'Exercise deleted successfully'});
      }, err =>{
        M.toast({html: 'Error'});
      });
    }
  }

}
