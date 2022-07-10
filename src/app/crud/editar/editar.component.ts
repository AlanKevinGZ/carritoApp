import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  objT:any={};
   id:any=0;

  formulario:FormGroup=new FormGroup({

    nombre_producto:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    categoria_producto:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    sub_categoria:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),

    precio_producto:new FormControl('',[this.costoValidator]),
    cantidad:new FormControl('',[this.costoValidator]),

    descripbr_producto:new FormControl('',[
      Validators.required,
      Validators.minLength(40),
    ]),

    imagen:new FormControl('',[this.img]),

  });
  imgUrl:any='';

  constructor(private serviceProdut:ProductService,private activeRoute:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let param=this.activeRoute.snapshot.params;

    if (param['id']) {
      this.serviceProdut.getProductID(param['id'])
      .subscribe(
        res=>{
          this.id=param['id'];
          this.objT=res;

          this.formulario.controls['nombre_producto'].setValue(this.objT[0]['nombre_producto']);
          this.formulario.controls['categoria_producto'].setValue(this.objT[0]['categoria_producto']);
          this.formulario.controls['sub_categoria'].setValue(this.objT[0]['sub_categoria']);
          this.formulario.controls['precio_producto'].setValue(this.objT[0]['precio_producto']);
          this.formulario.controls['cantidad'].setValue(this.objT[0]['cantidad']);
          this.formulario.controls['descripbr_producto'].setValue(this.objT[0]['descripbr_producto']);

          this.imgUrl=this.objT[0]['imagen'];

        },
        err=>console.log(err)

      )
    }
  }


  onSubmit(){
    console.log(this.formulario.value);

     this.serviceProdut.updateProduct(this.id,this.formulario.value)
      .subscribe(
        res=>{
          console.log(res);
          Swal.fire(
            'Producto Modificado',
            'Se Modifico Correctamente',
            'info'
          )
         setTimeout(() => {
          this.router.navigate(['/carrito/crud']);
         }, 1500);
        },
        err=>console.log(err)
      )
  }

   /* validacion de campos */
   img(formControl:any){

    let valor=formControl.value;

    if (valor) {

      valor= valor.substring(valor.lastIndexOf('\\')+1);

      formControl.value='../../assets/img/'+valor;

      return formControl.value;

    }else{
      return null;
    }


    }

  costoValidator(formControl:any){

    let value=formControl.value;

    let max=1000;
    let min=18;
    if (value >= min) {
      return null;
    }else{
      return {costo:{max,min}};
    }

  }


}
