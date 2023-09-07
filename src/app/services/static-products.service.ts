import { Injectable } from '@angular/core';
import { iProduct } from '../Models/iproduct';
// Dependency Injection Design Pattern

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private products: iProduct[];
  selected_category:number;
  constructor() { 
    
    this.selected_category=0;
    this.products = [
      {
        id: 1,
        category: 1,
        name: "iPhone 14",
        description: "The latest iPhone with A15 chip",
        price: 9941239,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
      },
      {
        id: 2,
        category: 2,
        name: "Samsung Washing Machine",
        description: "5kg fully automatic washing machine",
        price: 5041230,
        image: "https://images.samsung.com/is/image/samsung/p6pim/eg/ww90t534dan1as/gallery/eg-front-loading-washer-ww10t534daws1-ww90t534dan1as-413367660?$730_584_PNG$"
      },
      {
        id: 3,
        category: 3,
        name: "Atomic Habits",
        description: "Book by James Clear on how to build good habits",
        price: 241230,
        image: "https://images-eu.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,600_.jpg"
      },
      {
        id: 4,
        category: 4,
        name: "Alexa Echo Dot",
        description: "Hands-free smart speaker with Alexa",
        price: 541230,
        image: "https://m.media-amazon.com/images/I/81OeuPUyBBL.__AC_SX300_SY300_QL70_ML2_.jpg"
      },
      {
        id: 5,
        category: 5,
        name: "LEGO Star Wars X-Wing Fighter",
        description: "Iconic LEGO Star Wars toy with opening wings",
        price: 641230,
        image: "https://m.media-amazon.com/images/I/81xCK66iBnL.jpg"
      },
      {
        id: 6,
        category: 6,
        name: "Adidas Running Shoes",
        description: "Lightweight mesh running shoes for men and women",
        price: 904123,
        image: "https://assets.adidas.com/images/w_940,f_auto,q_auto/d9344ddf55bd48fca576ad4400ddc5c5_9366/GY3094_01_standard.jpg"
      },
      {
        id: 7,
        category: 7,
        name: "No Image",
        description: "Testing No Image Product",
        price: 100,
        image: ""
      }
    ]

  }
  getAllProducts():iProduct[]
  {
    return this.products;
  }
  getProductsByCategory(categoryId:number) : iProduct[]
  {
    if(categoryId==0)
    {
      return this.products
    }
    else
    {
      return this.products.filter(product => product.category == categoryId)
    }
  }
  getProductById(id:number):iProduct|null
  {
    let foundProduct=this.products.find(product => product.id == id)
    if(foundProduct)
    {
      return foundProduct
    }
    else
    return null;
  }
}
