import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  arrProduct:any=[];

  constructor(private serviceproductos:ProductService) { }

  ngOnInit(): void {

    /* obtenemos los productos */
    this.serviceproductos.getProductos().subscribe((productos)=>{
      this.arrProduct=productos;
      console.log(this.arrProduct);
      
    })
   
  }

  obtenerID(id:number | string){
    console.log(id);
    
  }

  
}
