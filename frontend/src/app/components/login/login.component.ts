import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import * as JWT from 'jwt-decode';

declare var M:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title:string ="Login";

  constructor(
    public authService: AuthService,
    private router:Router
     ) { }

  ngOnInit(): void {

  }

  signIn(form?:NgForm){
    if (form.valid == true){
      this.authService.signIn(form.value).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          const token  = localStorage.getItem('token');
          let decoded = JWT(token);
          delete decoded.iat;
          let role = decoded.role;
          localStorage.setItem('myself', JSON.stringify(decoded));
          M.toast({html: 'Login Successfuly'}); 
          if ( role == 'Trainee'){
            M.toast({html: 'Welcome Trainee'}); 
            this.router.navigate(['/trainee/routine-list']);
          }else if(role == 'Coach'){
            M.toast({html: 'Welcome Coach'}); 
            this.router.navigate(['coach/routine-list']);
          }else{
            M.toast({html: 'Welcome Admin'});
            this.router.navigate(['/admin/routine-list']);
          }
        },
        err =>  M.toast({html: 'Login Error'})
      );
     
    }else{
      M.toast({html: 'Invalid form'});
    }
  }

}
