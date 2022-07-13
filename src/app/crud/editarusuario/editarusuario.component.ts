import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss']
})
export class EditarusuarioComponent implements OnInit {
  objT:any={};
  id_usuario:any=0;

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
  constructor(private loginservice:LoginService,private activeRoute:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let param=this.activeRoute.snapshot.params;
    if (param['id']) {
      this.loginservice.getuserid(param['id'])
        .subscribe(
          res=>{
            this.id_usuario=param['id_usuario'];
            this.objT=res;
            this.formulario.controls['nombre'].setValue(this.objT[0]['nombre']);
            this.formulario.controls['correo'].setValue(this.objT[0]['correo']);
            this.formulario.controls['password'].setValue(this.objT[0]['password']);
            this.formulario.controls['id_rol'].setValue(this.objT[0]['id_rol']);
            this.formulario.controls['calle'].setValue(this.objT[0]['calle']);
            this.formulario.controls['numero'].setValue(this.objT[0]['numero']);
            this.formulario.controls['colonia'].setValue(this.objT[0]['colonia']);
            this.formulario.controls['municipio'].setValue(this.objT[0]['municipio']);
            this.formulario.controls['estado'].setValue(this.objT[0]['estado']);
            this.formulario.controls['pais'].setValue(this.objT[0]['pais']);
            this.formulario.controls['codigo_postal'].setValue(this.objT[0]['codigo_postal']);
          },
          err=>console.log(err)
        )
    }
  }

  update(){
    console.log(this.formulario.value);
    let param=this.activeRoute.snapshot.params;
    if (param['id']) {
      this.loginservice.update(param['id'], this.formulario.value)
        .subscribe(
          res => {
            console.log(res);
            Swal.fire(
              'Usuario Modificado',
              'Se Modifico Correctamente',
              'info'
            )
            setTimeout(() => {
              this.router.navigate(['/login/crud']);
            }, 1500);
          },
          err => console.log(err)
        )
    }
  }

}
