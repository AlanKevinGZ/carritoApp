import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryComponent} from "./login/entry/entry.component";
import {RecoverComponent} from "./login/recover/recover.component";
import {RegisterComponent} from "./login/register/register.component";
import {DireccionComponent} from "./login/direccion/direccion.component";

const routes: Routes = [{path: 'Login',component:EntryComponent},
  {path: 'Recover',component:RecoverComponent},
  {path: 'Register',component:RegisterComponent},
  {path: 'Direccion',component:DireccionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
