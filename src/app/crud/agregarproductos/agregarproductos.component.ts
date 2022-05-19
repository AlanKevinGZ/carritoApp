import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';/* rxjs para el tiempo */

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.scss']
})
export class AgregarproductosComponent implements OnInit {

  registrar:FormGroup=new FormGroup({

    nombre:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    category:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    subcategory:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    cost:new FormControl('',[
      this.costoValidator]),
    description:new FormControl('',[
      Validators.required,
      Validators.minLength(20),
    ]),

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registrar.value);
  }
  costoValidator(formControl:any){
    let value=formControl.value;
    let max=1000;
    let min=18;
    if (value >= min) {
      return null;
    }else{
      return {cost:{max,min}};
    }

  }

}
