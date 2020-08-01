import { Component, OnInit } from '@angular/core';
import { BillionaireService } from '../billionaire.service';

@Component({
  selector: 'app-game-body',
  templateUrl: './game-body.component.html',
  styleUrls: ['./game-body.component.css']
})
export class GameBodyComponent implements OnInit {
  constructor(
    private billionaire: BillionaireService
  ) { }
  money: number;
  products: object[];
  ngOnInit(): void {
    this.money = this.billionaire.money;
    this.products = this.billionaire.products;
  }
}
