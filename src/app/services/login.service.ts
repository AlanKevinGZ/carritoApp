import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: HttpClient) { }

  getudr() {
    return this.http.get('http://localhost:3000/api/login/')
  }

  getusuarios() {
    return this.http.get('http://localhost:3000/api/login/usuarios')
  }

  getdireccion() {
    return this.http.get('http://localhost:3000/api/login/direccion')
  }

  getuserrol() {
    return this.http.get('http://localhost:3000/api/login/userrol')
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

  postuserrol(usuario:any){
    return this.http.post(`http://localhost:3000/api/login/registerusr`,usuario)
  }

  delete(id:number | string){
    return this.http.delete(`http://localhost:3000/api/login/${id}`)
  }

  update(id:number | string, update:any):Observable<any>{
    return this.http.put(`http://localhost:3000/api/productos/${id}`,update)
  }

  /*loginUsuario(email:any,password:any){
    return this.http.post(`http://localhost:3000/api/login/login`,{email, password})
      .pipe(map(users =>{
        this.settoken(users[0].name);
        this.getLoggedInName.emit(true);
        return users;
      }));
  }*/

  settoken(token: string){
    localStorage.setItem('token',token)
  }
  gettoken(){
    return localStorage.getItem('token')
  }
  deletetoken(){
    localStorage.removeItem('token')
  }
  isloggetin(){
    const usertoken = this.gettoken();
    if(usertoken != null){
      return true
    }
    return false;
  }

}
