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
import {TablasComponent} from "../crud/tablas/tablas.component";
import {AuthGuard} from "../guards/auth.guard";
import {RolGuard} from "../guards/rol.guard";

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'login'},
  { path:'login', component:EntryComponent,/* canActivate: [AuthGuard]*/},
  {path:'login/register', component:RegisterComponent},
  {path:'login/registerd', component:RegisterdComponent},
  {path:'login/recover', component:RecoverComponent,/* canActivate: [AuthGuard]*/},
  {path:'login/crud', component:AgregarudrComponent,/*canActivate: [RolGuard], data: {Rol:'2'}*/},
  {path:'login/crud/user', component:AgregarusuarioComponent,/* canActivate: [AuthGuard]*/},
  {path:'login/crud/dirc', component:AgregardireccionComponent,/* canActivate: [AuthGuard]*/},
  {path:'login/crud/tablas', component:TablasComponent,/* canActivate: [AuthGuard]*/},
  {path:'login/crud/:id', component:EditarusuarioComponent,/* canActivate: [AuthGuard]*/},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
