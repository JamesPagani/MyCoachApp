import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL_API = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient,
     private router:Router ) {}

  signUp(user){
    return this.http.post<any>(this.URL_API+ 'signUp', user);
  }

  signIn(user){
    return this.http.post<any>(this.URL_API+ 'signin', user);
  }

  loggedIn(){
    if (localStorage.getItem('token')){
      return true
    }
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
