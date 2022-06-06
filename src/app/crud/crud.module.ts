import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarproductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  
})
export class CrudModule { }
