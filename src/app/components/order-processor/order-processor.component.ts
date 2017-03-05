import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.css']
})
export class OrderProcessorComponent {

  private _stockSymbol: string;

  @Input()
  set stockSymbol(value: string) {
    this._stockSymbol = value;
    if (this._stockSymbol != undefined ) {
      console.log(`Sending a Buy order to NASDAQ: ${this.stockSymbol} ${this.quantity}`);
    }
  }

  get stockSymbol(): string {
    return this._stockSymbol;
  }

  @Input() quantity: number;

}
