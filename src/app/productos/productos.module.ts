import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CarritoComponent } from './carrito/carrito.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MetodopagoComponent } from './metodopago/metodopago.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';


@NgModule({
  declarations: [
    CarritoComponent,
    DetallesComponent,
    MetodopagoComponent,
    NavbarComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    ProductosRoutingModule,
    RouterModule,
  ]
})
export class ProductosModule { }
