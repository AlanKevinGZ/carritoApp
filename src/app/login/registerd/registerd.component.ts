import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-registerd',
  templateUrl: './registerd.component.html',
  styleUrls: ['./registerd.component.scss']
})
export class RegisterdComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
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

  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginservice.getdireccion().subscribe((usuariodirc) => {
      this.arrusuario = usuariodirc;
    });
  }

  register() {
    console.log(this.formulario.value);
    this.loginservice.postusuariodirc(this.formulario.value).subscribe(
      (res) => {
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 1700);
        Swal.fire('Exitoso', 'El usuario se agrego correctamente', 'success');
      },
      (err) => {
        console.log(err)
        Swal.fire('Fallo ', 'El usuario no se agrego correctament', 'error');
      }
    );
  }

}
