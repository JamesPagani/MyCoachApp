import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import * as JWT from 'jwt-decode';

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
          localStorage.setItem('token', res.token);
          const token  = localStorage.getItem('token');
          let decoded = JWT(token);
          delete decoded.iat;
          let role = decoded.role;
          localStorage.setItem('myself', JSON.stringify(decoded));
          M.toast({html: 'Save Successfuly'});

          if ( role == 'Trainee'){
            this.router.navigate(['/trainee/routine-list']);
          }else if(role == 'Coach'){
            this.router.navigate(['coach/routine-list']);
          }else{
            this.router.navigate(['/admin/routine-list']);
          }
          
        },
        err =>  M.toast({html: 'Register Error'})
      );
     
    }else{
      M.toast({html: 'Invalid form'});
    }
    
  }

}
