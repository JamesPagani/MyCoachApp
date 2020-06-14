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
    localStorage.removeItem('myself');
    this.router.navigate(['/login']);
  }

  isAuthenticated(roles:string[]): boolean {
    return (this.getCurrentRol(roles) != null) ? true : false;
  };

  getCurrentRol(roles:string[]): string {
    let myself = JSON.parse(localStorage.getItem('myself'));

    for (const rol of roles) {
      if(myself && myself.role == rol){
        return myself.role;
      }
    }
    return  null;
  };

}
