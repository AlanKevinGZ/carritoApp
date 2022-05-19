import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  arrProductos: any = [
    { id: 1, producto: 'PHP', decripcion: 'producto 7', costo: 120, img: '../../assets/img/curso7.jpg' },
  ];

  constructor() {}

  getProductos() {
    return this.arrProductos;
  }

}
