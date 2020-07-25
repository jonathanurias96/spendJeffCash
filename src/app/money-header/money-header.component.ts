import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-money-header',
  templateUrl: './money-header.component.html',
  styleUrls: ['./money-header.component.css']
})
export class MoneyHeaderComponent implements OnInit {
  @Input('money') money;
  constructor() { }
  ngOnInit(): void {
  }

}
