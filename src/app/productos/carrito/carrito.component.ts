import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  arrProduct:any=[];
  lista:any=[];
  productosAgregados:any=[];

  arrAgregar: any = [];
  total:number=0;
  ids:any=0;

  constructor(private serviceproductos:ProductService) { }

  ngOnInit(): void {

    /* obtenemos los productos */
    this.serviceproductos.getProductos().subscribe((productos)=>{
      this.arrProduct=productos;
      /* console.log(this.arrProduct); */
      
    })

       this.total=JSON.parse(localStorage.getItem('total') || '0');
    this.arrAgregar=JSON.parse(localStorage.getItem('carrito') || '[]') 
    
    
    
  }

  agregarProducto(id:number|string){
    
   this.ids=this.serviceproductos.agregarProductos(id);
   let objetoCarrito={
    id: 0, 
    nombre_producto: "", 
    precio_producto: "",  
    imagen: "",
    cantidadT:1
   }

   this.serviceproductos.getProductID(this.ids).subscribe((item:any)=>{
    this.productosAgregados=item;
   
    this.productosAgregados.forEach( (pro:any) => {
      objetoCarrito.id=pro.id;
      objetoCarrito.nombre_producto=pro.nombre_producto;
      objetoCarrito.precio_producto=pro.precio_producto;
      objetoCarrito.imagen=pro.imagen;
    });     
    
    let existe=this.arrAgregar.some( (curso:any)=>{
        
      return curso.id==this.productosAgregados[0]['id'];     
   })

   this.productosAgregados[0]=objetoCarrito;
   if (existe) {
    console.log('existe');

    let curso=this.arrAgregar.map( (carrito:any) =>{
      if (carrito.id===this.productosAgregados[0].id) {
        carrito.cantidadT++;
        this.total+=parseInt(carrito.precio_producto);
        return carrito;
         
      }else{
       
        return carrito;
      }
 } )
    
  }else{
    this.arrAgregar.push(this.productosAgregados[0]);
    this.total+=parseInt(this.productosAgregados[0].precio_producto)
 
    
    console.log('no existe');
  
  }
  console.log(this.arrAgregar);
  localStorage.setItem('carrito', JSON.stringify(this.arrAgregar));
  localStorage.setItem('total', JSON.stringify(this.total));
  })
   
 
  
  }


  
}
