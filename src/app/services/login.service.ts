import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Token} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: HttpClient,private jwtHelper:JwtHelperService) { }

  getudr() {
    return this.http.get('http://localhost:3000/api/login/')
  }

  getusuarios() {
    return this.http.get('http://localhost:3000/api/login/usuarios')
  }

  getdireccion() {
    return this.http.get('http://localhost:3000/api/login/direccion')
  }

  getrol() {
    return this.http.get('http://localhost:3000/api/login/rol')
  }

  getuserid(id:number | string) {
    return this.http.get(`http://localhost:3000/api/login/${id}`)
  }

  postusuario(usuario:any){
    return this.http.post(`http://localhost:3000/api/login/registeruser`,usuario)
  }

  postusuariodirc(usuario:any){
    return this.http.post(`http://localhost:3000/api/login/registerdirc`,usuario)
  }

  delete(id:number | string){
    return this.http.delete(`http://localhost:3000/api/login/${id}`)
  }

  update(id:number | string, update:any):Observable<any>{
    return this.http.put(`http://localhost:3000/api/productos/${id}`,update)
  }

  postlogin(usuario:any){
    return this.http.post(`http://localhost:3000/api/login/login`,usuario)
  }

  /*isAuth():boolean{
    const token = localStorage.getItem('Token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('Token')){
      return false;
    }
    return true;
  }*/

}
