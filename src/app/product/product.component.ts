import { Component, OnInit} from '@angular/core';

import { BillionaireService } from '../billionaire.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;

  constructor(
    private billionaire: BillionaireService,
    public cart: CartService
  ) { }
  buyProduct(product) {
    this.billionaire.spendMoney(product);
    this.cart.addToCart(product);
  }
  sellProduct(product) {
    this.billionaire.getMoneyBack(product);
    this.cart.removeFromCart(product);
  }
  ngOnInit(): void {
    this.products = this.billionaire.products;
  }
}
