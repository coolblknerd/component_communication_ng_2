import { Component, Output, Directive, EventEmitter } from '@angular/core';
import { Stock } from '../interfaces/stock';

@Component({
  selector: 'price-quoter-mediator',
  templateUrl: './price-quoter-mediator.component.html',
  styleUrls: ['./price-quoter-mediator.component.css']
})
export class PriceQuoterMediatorComponent {

  @Output()
  buy: EventEmitter <Stock> = new EventEmitter();

  stockSymbol: string = "IBM";
  lastPrice: number;

  constructor() {
    setInterval(() => {
      this.lastPrice = 100*Math.random();
    }, 2000);
  }

  buyStocks(): void {
    let stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    this.buy.emit(stockToBuy);
  }
}
