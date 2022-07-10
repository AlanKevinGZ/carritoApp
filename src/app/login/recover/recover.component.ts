import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
