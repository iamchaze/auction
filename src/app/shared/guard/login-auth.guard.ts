import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if(sessionStorage.getItem("userkey") == null && localStorage.getItem("userkey") == null){
      this.router.navigate(['\home'])
      return false
    } else {
      return true
    }
  }

}
