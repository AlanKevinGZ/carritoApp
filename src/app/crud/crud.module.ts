import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AgregarproductosComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  
})
export class CrudModule { }
