import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productosAgregados:any=[];
  arrAgregar: any = [];
  total:number=0;
  
  constructor(private http:HttpClient) {}

  /* obtener todos los productos del back */
  getProductos() {
    return this.http.get('http://localhost:3000/api/productos')
  }

  /* obtenemos por id */
  getProductID(id:number | string){
    return this.http.get(`http://localhost:3000/api/productos/${id}`);
  }

  saveProduct(product:any){
    return this.http.post(`http://localhost:3000/api/productos`,product)
  }

  delete(id:number | string){
    return this.http.delete(`http://localhost:3000/api/productos/${id}`)
  }

  updateProduct(id:number | string,update:any):Observable<any>{
    return this.http.put(`http://localhost:3000/api/productos/${id}`,update)
  }


  /* agregar productos carrito */
  agregarProductos(id:number|string){
   
   return id;
      
  }

 

}
