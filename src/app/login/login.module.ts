import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';
import { DireccionComponent } from './direccion/direccion.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    EntryComponent,
    RecoverComponent,
    RegisterComponent,
    DireccionComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LoginModule { }
