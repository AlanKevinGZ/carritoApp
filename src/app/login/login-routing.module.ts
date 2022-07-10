import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryComponent} from "./entry/entry.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterdComponent} from "./registerd/registerd.component";
import {RecoverComponent} from "./recover/recover.component";
import {AgregarudrComponent} from "../crud/agregarudr/agregarudr.component";
import {EditarusuarioComponent} from "../crud/editarusuario/editarusuario.component";
import {AgregarusuarioComponent} from "../crud/agregarusuario/agregarusuario.component";
import {AgregardireccionComponent} from "../crud/agregardireccion/agregardireccion.component";
import {AgregarrolComponent} from "../crud/agregarrol/agregarrol.component";
import {TablasComponent} from "../crud/tablas/tablas.component";

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'login'},
  { path:'login', component:EntryComponent},
  {path:'login/register', component:RegisterComponent},
  {path:'login/registerd', component:RegisterdComponent},
  {path:'login/recover', component:RecoverComponent},
  {path:'login/crud', component:AgregarudrComponent},
  {path:'login/crud/user', component:AgregarusuarioComponent},
  {path:'login/crud/dirc', component:AgregardireccionComponent},
  {path:'login/crud/rol', component:AgregarrolComponent},
  {path:'login/crud/tablas', component:TablasComponent},
  {path:'login/crud/:id', component:EditarusuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
