import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-price',
  templateUrl: './table-price.component.html',
  styleUrls: ['./table-price.component.css']
})
export class TablePriceComponent implements OnInit {
  @Input() price : number
  constructor() { 
    this.price = 0
  }

  ngOnInit(): void {
  }

}
