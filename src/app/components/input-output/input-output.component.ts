import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {
  stock: string;
  @Input() stockSymbol: string = "";
  @Input() price: number = 0;

  onInputEvent({target}): void {
    this.stock = target.value;
  }

  priceQuoteHandler(source) {
    this.stockSymbol = source.stockSymbol;
    this.price = source.lastPrice;
  }
}
