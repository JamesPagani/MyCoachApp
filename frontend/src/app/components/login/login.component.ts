import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

declare var M:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myself = {_id: '', username: '', name:'', role:''};
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
          console.log(res);
          localStorage.setItem('token', res.token);
          M.toast({html: 'Login Successfuly'});
          this.router.navigate(['/home']);
        },
        err =>  {
          console.log(err);
          M.toast({html: 'Login Error'})
        }
      );
     
    }else{
      M.toast({html: 'Invalid form'});
    }
  }

}
