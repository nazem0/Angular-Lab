import { EventEmitter,Input,Component, OnInit, OnChanges, Output } from '@angular/core';
import { iProduct } from '../../Models/iproduct';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  ngOnInit() {}
  
  ngOnChanges():void{
    this.filterCategoryByID();
  }

  date:Date=new Date();
  store_name: string;
  store_logo: string;
  client_name: string = "";
  @Input() sent_selected_category: string="";
  order_total_price: number = 0;
  @Output() on_change_order_total_price:EventEmitter<number>;
  products: iProduct[];
  filtered_products_by_category:iProduct[];
  constructor() {
    this.on_change_order_total_price=new EventEmitter();
    this.store_name = 'S-Mart';
    this.store_logo = 'https://s3.amazonaws.com/thumbnails.venngage.com/template/fc8535df-be09-4c80-8ea5-a69a34b2318e.png';
    
    this.products = [
      {
        id: 1,
        category: "Electronics",
        name: "iPhone 14",
        description: "The latest iPhone with A15 chip",
        price: 9941239,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
      },
      {
        id: 2,
        category: "Appliances",
        name: "Samsung Washing Machine",
        description: "5kg fully automatic washing machine",
        price: 5041230,
        image: "https://images.samsung.com/is/image/samsung/p6pim/eg/ww90t534dan1as/gallery/eg-front-loading-washer-ww10t534daws1-ww90t534dan1as-413367660?$730_584_PNG$"
      },
      {
        id: 3,
        category: "Books",
        name: "Atomic Habits",
        description: "Book by James Clear on how to build good habits",
        price: 241230,
        image: "https://images-eu.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,600_.jpg"
      },
      {
        id: 4,
        category: "Home",
        name: "Alexa Echo Dot",
        description: "Hands-free smart speaker with Alexa",
        price: 541230,
        image: "https://m.media-amazon.com/images/I/81OeuPUyBBL.__AC_SX300_SY300_QL70_ML2_.jpg"
      },
      {
        id: 5,
        category: "Toys",
        name: "LEGO Star Wars X-Wing Fighter",
        description: "Iconic LEGO Star Wars toy with opening wings",
        price: 641230,
        image: "https://m.media-amazon.com/images/I/81xCK66iBnL.jpg"
      },
      {
        id: 6,
        category: "Clothing",
        name: "Adidas Running Shoes",
        description: "Lightweight mesh running shoes for men and women",
        price: 904123,
        image: "https://assets.adidas.com/images/w_940,f_auto,q_auto/d9344ddf55bd48fca576ad4400ddc5c5_9366/GY3094_01_standard.jpg"
      },
      {
        id: 7,
        category: "Testing",
        name: "No Image",
        description: "Testing No Image Product",
        price: 100,
        image: ""
      }
    ]
    this.filtered_products_by_category=this.products
  };


  buy(price:number)
  {
    this.on_change_order_total_price.emit(price);
  }
  filterCategoryByID()
  {
    if(this.sent_selected_category=="")
    {
      this.filtered_products_by_category=this.products
    }
    else
    {
      this.filtered_products_by_category=this.products.filter(product => product.category.toLowerCase() === this.sent_selected_category.toLowerCase())
    }
  }
  client_name_read(_client_name: string) {
    this.client_name = _client_name;
  }
  
}
