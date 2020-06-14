import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  canActivate( route: ActivatedRouteSnapshot):boolean {

    const roles = route.data["roles"] as Array<string>;

    if(this.authService.loggedIn()) {
      if (route.url[0].path == 'register' || route.url[0].path == 'login')
      {
        this.router.navigate(['/home']);
        return false;
      }
      else{
        
        if (this.authService.isAuthenticated(roles)) {
          return true;  
        }
      }
    } else {
      if (route.url[0].path == 'register' || route.url[0].path == 'login')
      {
          return true;
      }
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}
