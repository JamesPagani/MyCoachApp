import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

declare var $:any;
declare var M:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public myself = {_id: '', username: '', name:'', role:''};
  public title:string = "Register";
  public tmp_role:string = "";

  constructor(
    public authService: AuthService,
    private router:Router
     ) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('select').formSelect();
    });
  }

  signUp(form?:NgForm){
    if (form.valid == true){
      form.value.active = true;
      this.authService.signUp(form.value).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          M.toast({html: 'Save Successfuly'});
          this.router.navigate(['/trainee/routine-list']);
        },
        err =>  M.toast({html: 'Save Successfuly'})
      );
     
    }else{
      M.toast({html: 'Invalid form'});
    }
    
  }

}
