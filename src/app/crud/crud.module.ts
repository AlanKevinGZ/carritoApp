import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { RouterModule } from '@angular/router';
import { AgregarusuarioComponent } from './agregarusuario/agregarusuario.component';
import { AgregardireccionComponent } from './agregardireccion/agregardireccion.component';
import { AgregarrolComponent } from './agregarrol/agregarrol.component';
import { AgregarudrComponent } from './agregarudr/agregarudr.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { TablasComponent } from './tablas/tablas.component';



@NgModule({
  declarations: [
    AgregarproductosComponent,
    EditarComponent,
    AgregarusuarioComponent,
    AgregardireccionComponent,
    AgregarrolComponent,
    AgregarudrComponent,
    EditarusuarioComponent,
    TablasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  
})
export class CrudModule { }
