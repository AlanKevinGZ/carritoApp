import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AgregarproductosComponent } from '../crud/agregarproductos/agregarproductos.component';
import { EditarComponent } from '../crud/editar/editar.component';
import { MetodopagoComponent } from './metodopago/metodopago.component';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'carrito'},
  { path:'carrito', component:CarritoComponent},
  {path:'carrito/pagos', component:MetodopagoComponent},
  {path: 'carrito/crud', component:AgregarproductosComponent},
  {path:'carrito/crud/:id', component:EditarComponent},
  {path:'carrito/:id', component:DetallesComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
