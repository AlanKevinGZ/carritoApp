import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [
    CarritoComponent
  ],

  exports:[
    CarritoComponent
  ],

  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
