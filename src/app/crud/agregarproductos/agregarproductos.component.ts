import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';/* rxjs para el tiempo */
=======
>>>>>>> main

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.scss']
})
export class AgregarproductosComponent implements OnInit {
<<<<<<< HEAD
 


  formulario:FormGroup=new FormGroup({
   
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
     costo:new FormControl('',[this.costoValidator]),

     descrip:new FormControl('',[
      Validators.required,
      Validators.minLength(20),
    ]),
    
  });
=======
>>>>>>> main

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(){
    console.log(this.formulario.value);
  }
  costoValidator(formControl:any){
    let value=formControl.value;

    let max=1000;
    let min=18;
    if (value >= min) {
      return null;
    }else{
      return {costo:{max,min}};
    }
   
  }

=======
>>>>>>> main
}
