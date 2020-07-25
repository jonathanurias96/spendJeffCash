import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('products') products;
  constructor() { }
  buy(): void{
    alert("Buy!")
  }
  sell(): void {
    alert("Sell!")
  }
  ngOnInit(): void {
  }

}
