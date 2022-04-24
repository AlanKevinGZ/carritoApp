import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  arrProduct:any=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
  }

  
}
