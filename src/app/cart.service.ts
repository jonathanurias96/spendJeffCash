import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentCart = {};
  addToCart(product) {
    if(this.currentCart[product.name]) {
      this.currentCart[product.name]++
    } else {
      this.currentCart[product.name] = 1
    }
  }
  removeFromCart(product) {
    if(this.currentCart[product.name] === 1){
      delete this.currentCart[product.name]
    } else if (this.currentCart[product.name]) {
      this.currentCart[product.name]--
    }
  }
  constructor() { }
}

interface Products {
  photo: string;
  name: string;
  price: number;
}
