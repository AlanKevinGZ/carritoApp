import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();

  message: string = "Hola Mundo!";
  arrProduct:any=[];
  total:number=0;

  constructor(private serviceproductos:ProductService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    
    /*  this.arrProduct=this.serviceproductos.mostrarCarrito();
    console.log(this.arrProduct);  */
    
    /* this.arrProduct.forEach( (item:any) => {
       this.total+=parseInt(item['precio_producto']);
    });

    console.log(this.total); */
    
  }

  




}
