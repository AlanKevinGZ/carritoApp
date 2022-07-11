import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";
import { Router} from "@angular/router";
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

  constructor(private loginservice: LoginService, private router:Router) {

  }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.formulario.value);
    this.loginservice.postlogin(this.formulario.value).subscribe((res:any) => {
      if((res.length>0)){
        console.log(res);
        Swal.fire(
          'Usuario encontrado',
          'El usuario esta registrado',
          'success'
        )
        localStorage.setItem('Token', res.token);
        this.router.navigate(['/carrito']);
      }else{
        console.log(res);
        Swal.fire(
          'Usuario no encontrado',
          'El usuario no esta registrado',
          'error'
        )
        this.router.navigate(['/login']);
      }
    },
        err=> console.log(err)
    )
  }
}
