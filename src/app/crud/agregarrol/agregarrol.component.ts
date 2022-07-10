import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-agregarrol',
  templateUrl: './agregarrol.component.html',
  styleUrls: ['./agregarrol.component.scss']
})
export class AgregarrolComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    id_usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    id_rol: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  arrusuario: any = [];
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginservice.getusuarios().subscribe((usuario) => {
      this.arrusuario = usuario;
    });
  }

  register() {
    console.log(this.formulario.value);
    this.loginservice.postuserrol(this.formulario.value).subscribe(
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
