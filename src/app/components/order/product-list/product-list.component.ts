import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ngOnInit() { }

  ngOnChanges(): void {
    this.filtered_products_by_category = this.staticProductsService.getProductsByCategory(this.sent_selected_category);
  }

  date: Date = new Date();
  store_name: string;
  store_logo: string;
  client_name: string = "";
  @Input() sent_selected_category: number = 0;
  order_total_price: number = 0;
  @Output() on_change_order_total_price: EventEmitter<number>;
  filtered_products_by_category: iProduct[] = this.staticProductsService.getAllProducts();
  constructor(private staticProductsService: StaticProductsService) {
    this.on_change_order_total_price = new EventEmitter();
    this.store_name = 'S-Mart';
    this.store_logo = 'https://s3.amazonaws.com/thumbnails.venngage.com/template/fc8535df-be09-4c80-8ea5-a69a34b2318e.png';


  };


  buy(price: number) {
    this.on_change_order_total_price.emit(price);
  }

  client_name_read(_client_name: string) {
    this.client_name = _client_name;
  }
}
