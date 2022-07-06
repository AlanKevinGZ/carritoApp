import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  producto:any={};
  constructor(private serviceProdut:ProductService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let param=this.activeRoute.snapshot.params;
    console.log(param);
    if (param['id']) {
      this.serviceProdut.getProductID(param['id'])
        .subscribe((i:any)=>{
          console.log(i);
          this.producto=i;
          this.producto=this.producto[0];
          console.log(this.producto);
          
          
        })
    }
    

  }

}
