import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-header',
  templateUrl: './money-header.component.html',
  styleUrls: ['./money-header.component.css']
})
export class MoneyHeaderComponent implements OnInit {
  constructor() { }
  money = 183000000000;
  ngOnInit(): void {
  }

}
