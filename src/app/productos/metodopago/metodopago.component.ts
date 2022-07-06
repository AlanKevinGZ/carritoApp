import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.component.html',
  styleUrls: ['./metodopago.component.scss']
})
export class MetodopagoComponent implements OnInit {

  total:number=0;
  arrPro:any=[];

  card:any="";
  fecha:any="";
  cvv:any="";
  cardName:any="";
  factura:string="";


  
  constructor() { }

  ngOnInit(): void {

    this.total= JSON.parse(localStorage.getItem('total')!);
    this.arrPro=JSON.parse(localStorage.getItem('carrito')!);
    console.log(this.arrPro);
    
  }

  pagar(){
    let prod="";
    let obj={
      card:this.card,
      fecha:this.fecha,
      cvv:this.cvv,
      namecard:this.cardName,
    }
    console.log(obj);
    this.factura= this.total.toString();
   
   
    this.arrPro.forEach( (item:any) => {
      
      prod+=" "+item.nombre_producto;
    });

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    
   let myDate = new Date();
   let hours = myDate.getHours();
   let minutes = myDate.getMinutes();
   let seconds = myDate.getSeconds();
    let fullDate=`${hours}:${minutes}:${seconds}`
    this.factura=`total: $${ this.factura} productos:${prod} fecha:${output}
    horas:${fullDate}`;

    console.log( fullDate );
    
  }

}
