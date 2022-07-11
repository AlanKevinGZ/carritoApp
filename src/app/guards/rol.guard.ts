import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(private loginservice: LoginService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot):boolean{
    /*const expectedRole = route.data.rol;
    const token = localStorage.getItem('token');
    const { nombre,id_rol }= decode(token);
    console.log(id_rol)

    if(!this.loginservice.isAuth() ||  id_rol !== expectedRole){
      console.log('Usuario no autorizado para la vista');
      this.router.navigate(['/login'])
      return false;
    }*/
    return true;
  }

}
