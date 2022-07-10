import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-agregarudr',
  templateUrl: './agregarudr.component.html',
  styleUrls: ['./agregarudr.component.scss']
})
export class AgregarudrComponent implements OnInit {
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
  arrusuariodr: any = [];

  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {
    this.loginservice.getudr().subscribe((usuarios) => {
      this.arrusuariodr = usuarios;
    });
  }

  delete(id: any) {
    Swal.fire({
      title: 'Esta seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'Su usuario ha sido eliminado.', 'success');
        this.arrusuariodr.forEach((i: any, e: any) => {
          if (id == i.id_usuario) {
            console.log(i);
            this.arrusuariodr.splice(e, 1);
          }
        });
        this.loginservice.delete(id).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => console.log(err)
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire('Cancelado', 'Se ha cancelado la operacion', 'error');
      }
    });
  }

}
