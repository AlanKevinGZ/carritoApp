import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> main



@NgModule({
  declarations: [
    AgregarproductosComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  
=======
    CommonModule
  ],
  exports: [
    AgregarproductosComponent
  ]
>>>>>>> main
})
export class CrudModule { }
