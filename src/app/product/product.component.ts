import { Component, OnInit} from '@angular/core';
import { BillionaireService } from '../billionaire.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  constructor(
    private billionaire: BillionaireService
  ) { }
  buyProduct(product) {
    this.billionaire.spendMoney(product);
    console.log(this.billionaire.money)
  }
  sellProduct(product) {
    this.billionaire.getMoneyBack(product);
    console.log(this.billionaire.money)
  }
  ngOnInit(): void {
    this.products = this.billionaire.products;
  }
}
