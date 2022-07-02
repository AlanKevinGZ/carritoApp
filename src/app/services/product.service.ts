import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  arrProductos:any=[
    {id:1,titulo:'PHP',descripcion:'productos'  },
    {id:2,titulo:'C#',descripcion:'productos'  }
  ]
  
  constructor() {
    
   }

   getProdudctos(){
    return this.arrProductos;
   }

   buscarProductos(id:any){
  /*   console.log(this.arrProductos[id]); */
    this.arrProductos.forEach((e:any) => {
      if (e.id===id) {
        console.log(e);
        return;
        
      }
    });
    
   }

 

}
