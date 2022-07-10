import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { EntryComponent } from './entry/entry.component';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';
import { RegisterdComponent } from './registerd/registerd.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    EntryComponent,
    RecoverComponent,
    RegisterComponent,
    RegisterdComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
    ]
})
export class LoginModule { }
