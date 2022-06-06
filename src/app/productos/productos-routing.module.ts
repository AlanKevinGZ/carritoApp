import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AgregarproductosComponent } from '../crud/agregarproductos/agregarproductos.component';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'carrito'},
  { path:'carrito', component:CarritoComponent},
<<<<<<< HEAD
  {path: 'carrito/crud', component:AgregarproductosComponent},
  {path:'carrito/:id', component:DetallesComponent},
 
=======
  {path:'carrito/:id', component:DetallesComponent},
  {path: 'agregarproductos', component:AgregarproductosComponent}
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
