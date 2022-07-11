import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    nombre_rol: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    id_rol: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    calle: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    numero: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    colonia: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    municipio: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    estado: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    pais: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    codigo_postal: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  arrusuario: any = [];
  arrdireccion: any =[];
  arruserrol: any =[];

  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {
    this.loginservice.getusuarios().subscribe((usuarios) => {
      this.arrusuario = usuarios;
    });
    this.loginservice.getdireccion().subscribe((direccion) => {
      this.arrdireccion = direccion;
    });
    this.loginservice.getrol().subscribe((userrol) => {
      this.arruserrol = userrol;
    });
  }

}
