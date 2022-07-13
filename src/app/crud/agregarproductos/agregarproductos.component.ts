import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.scss'],
})
export class AgregarproductosComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    nombre_producto: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    categoria_producto: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    sub_categoria: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    precio_producto: new FormControl('', [this.costoValidator]),
    cantidad: new FormControl('', [this.costoValidator]),

    descripbr_producto: new FormControl('', [
      Validators.required,
      Validators.minLength(40),
    ]),

    imagen: new FormControl('', [this.img]),
  });

  arrProductos: any = [];

  constructor(private serviceProdut: ProductService) {}

  ngOnInit(): void {
    this.serviceProdut.getProductos().subscribe((productos) => {
      this.arrProductos = productos;
      /*  console.log(this.arrProductos); */
    });
  }

  /* evenetos crud */

  /* crear */
  onSubmit() {
    console.log(this.formulario.value);
    this.serviceProdut.saveProduct(this.formulario.value).subscribe(
      (res) => {
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 1700);
        Swal.fire('Producto Agregado', 'Se agrego Correctamente', 'success');
      },
      (err) => console.log(err)
    );
  }

  /* eliminar */
  delteproduct(id: any) {
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
        Swal.fire('Eliminado!', 'Su Producto ha sido eliminado.', 'success');
        /*  console.log(id); */
        this.arrProductos.forEach((i: any, e: any) => {
          if (id == i.id) {
            console.log(i);
            this.arrProductos.splice(e, 1);
          }
        });

        this.serviceProdut.delete(id).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => console.log(err)
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire('Cancelado', 'Se ha cancelado la operacion', 'error');
      }
    });
  }

  /* validacion de campos */
  img(formControl: any) {
    let valor = formControl.value;

    if (valor) {
      valor = valor.substring(valor.lastIndexOf('\\') + 1);

      formControl.value = '../../assets/img/' + valor;

      return formControl.value;
    } else {
      return null;
    }
  }

  costoValidator(formControl: any) {
    let value = formControl.value;

    let max = 1000;
    let min = 18;
    if (value >= min) {
      return null;
    } else {
      return { costo: { max, min } };
    }
  }
}
