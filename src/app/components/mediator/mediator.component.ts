import { Component  } from '@angular/core';
import { PriceQuoterMediatorComponent } from '../price-quoter-mediator/price-quoter-mediator.component';
import { Stock } from '../interfaces/stock';

@Component({
  selector: 'mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent {
  stock: Stock;

  priceQuoteHandler(event: Stock) {
    this.stock = event
  }
}
