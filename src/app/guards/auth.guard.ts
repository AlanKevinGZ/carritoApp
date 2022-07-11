import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";
import { Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginservice: LoginService, private router:Router) {
  }
  canActivate():boolean{
    /*if(!this.loginservice.isAuth()){
      console.log('Token no valido o token expirado');
      this.router.navigate(['/login'])
      return false;
    }*/
    return true;
  }

}
