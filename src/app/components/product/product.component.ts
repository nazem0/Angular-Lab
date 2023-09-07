import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:iProduct;
  receviced_product_id:number=0;
  constructor(private staticProductsService:StaticProductsService,private ActivatedRoute : ActivatedRoute)
  {
    this.product=
    {
      id:0,
      category:0,
      name:"",
      description:"",
      price:0,
      image:""
    }
  }
  ngOnInit():void{
    
    let receivedProduct=this.staticProductsService.getProductById(this.ActivatedRoute.snapshot.paramMap.get('id'));
    if(receivedProduct)
    {
      this.product=receivedProduct
    };
    console.log(this.product);
  }

}
