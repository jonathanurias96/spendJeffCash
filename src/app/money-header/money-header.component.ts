import { Component, OnInit } from '@angular/core';
import { BillionaireService } from '../billionaire.service';

@Component({
  selector: 'app-money-header',
  templateUrl: './money-header.component.html',
  styleUrls: ['./money-header.component.css']
})
export class MoneyHeaderComponent implements OnInit {
  constructor(
    public billionaire: BillionaireService
  ) { }
  ngOnInit(): void {
  }
}
