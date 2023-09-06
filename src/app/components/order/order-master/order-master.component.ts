import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent {
  selected_category:string;
  order_total_price:number;
  categories: ICategory[];
  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'Electronics'
      },
      {
        id: 2,
        name: 'Appliances'
      },
      {
        id: 3,
        name: 'Books'
      },
      {
        id: 4,
        name: 'Home'
      },
      {
        id: 5,
        name: 'Toys'
      },

    ]
    this.selected_category="";
    this.order_total_price=0;
  }

  read_order_total_price(_order_total : number)
  {
    this.order_total_price+=_order_total
  }
}
