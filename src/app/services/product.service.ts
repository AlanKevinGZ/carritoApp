import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
<<<<<<< HEAD

=======
  
  
>>>>>>> main
  
  arrProductos: any = [
    { id: 1, prducto: 'PHP', decripcion: 'producto 1', costo: 120, img: '../../assets/img/curso1.jpg' },
  ];

  constructor() {}

  getProductos() {
    return this.arrProductos;
  }

}
