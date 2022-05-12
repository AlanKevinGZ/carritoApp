import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';



@NgModule({
  declarations: [
    AgregarproductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarproductosComponent
  ]
})
export class CrudModule { }
