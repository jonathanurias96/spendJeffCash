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
    console.log(this.currentCart)
  }
  removeFromCart(product) {
    if(this.currentCart[product.name] === 1){
      delete this.currentCart[product.name]
    } else if (this.currentCart[product.name]) {
      this.currentCart[product.name]--
    }
    console.log(this.currentCart)
  }
  getProductAmount(product) {
    if(this.currentCart[product.name]) {
      return this.currentCart[product.name];
    } 
    return 0;
  }
  constructor() { }
}