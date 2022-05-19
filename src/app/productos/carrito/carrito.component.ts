import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  armProduct:any=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.armProduct=this.productService.getProductos();
    console.log(this.armProduct);

  }


}
