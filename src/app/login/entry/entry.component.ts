import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
declare var ventana4:any;
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  login = {
    correo: null,
    password: null
  }

  /*loginbtn:boolean;
  logoutnbtn:boolean;*/
  constructor(private loginservice: LoginService,private formbuilder:FormBuilder, private http:HttpClient, private router:Router) {
    /*this.loginservice.loginUsuario.subscribe(name => this.changeName(name));
    if(this.loginservice.logged()){
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutnbtn=true;
    }else{
      this.loginbtn=true;
      this.logoutnbtn=false;
    }*/
  }

  /*private changeName(name: boolean): void{
    this.logoutnbtn=name;
    this.loginbtn=!name;
  }
  logout(){
    this.loginservice.deletetoken(){
      window.location.href = "/login";
    }
  }*/

  ngOnInit(): void {
  }

  /*loginUsuario(){
    this.loginservice.loginUsuario(this.formulario.value.email,this.formulario.value.password)
      .pipe(first())
      .subscribe(
        data =>{
          const redirect = this.loginservice.redirecturl ? this.loginservice.redirecturl : 'carrito';
          this.router.navigate(redirect);
        },
        error => {
          Swal.fire(
            'Oops...',
            'Usuario o contraseña incorrecto',
            'error'
          )
        }
      )
  }*/
}
