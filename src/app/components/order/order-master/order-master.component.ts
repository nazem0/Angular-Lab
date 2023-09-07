import { Component } from '@angular/core';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent {
  selected_category:number;
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
      {
        id: 6,
        name: 'Clothing'
      },
      {
        id: 7,
        name: 'Testing'
      }
    ]
    this.selected_category=0;
    this.order_total_price=0;
  }

  read_order_total_price(_order_total : number)
  {
    this.order_total_price+=_order_total
  }
}
