import { Component, Output, EventEmitter } from '@angular/core';

interface IPriceQuote {
  stockSymbol: string;
  lastPrice: number;
}

@Component({
  selector: 'price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent {

  @Output()
  lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();
  stockSymbol: string = "IBM";
  price: number;

  constructor() {
    setInterval(() => {
      let priceQuote: IPriceQuote = {
        stockSymbol: this.stockSymbol,
        lastPrice: 100*Math.random()
      };

      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote)
    }, 1000);
  }
}
