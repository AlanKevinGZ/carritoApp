import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.scss']
})
export class AgregarproductosComponent implements OnInit {
 

  formulario:FormGroup=new FormGroup({
   
    nombre_producto:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    categoria_producto:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    /* subcategory:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]), */
    
    precio_producto:new FormControl('',[this.costoValidator]),

    descripbr_producto:new FormControl('',[
      Validators.required,
      Validators.minLength(20),
    ]),

    img:new FormControl('',[
      Validators.required,
    ]),
    
  });

  arrProductos:any=[];

  objPrueba={
    nombre_producto: "gatoss",
    categoria_producto: "mascotas",
    precio_producto: "100",
    descripbr_producto: "dsfdsjfjdskfjdsklfj",
    imagen: "https://tienda.movistar.com.mx/media/catalog/product/cache/b381a1133c1a54c68e103060075e0843/f/r/frontal_xiaomi_note_10_pro_lte_bronce.png"
  }

  constructor(private serviceProdut:ProductService) { }

  ngOnInit(): void {
    this.serviceProdut.getProductos().subscribe((productos)=>{
      this.arrProductos=productos;
      /* console.log(this.arrProductos); */
      
    })
   
  }

  onSubmit(){
    console.log(this.formulario.value);
    
      this.serviceProdut.saveProduct(this.formulario.value)
      .subscribe(
        res=>{
          console.log(res);
          
        },
        err=>console.log(err)
        
      )  
    
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

}
