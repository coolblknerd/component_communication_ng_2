import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.css']
})
export class OrderProcessorComponent {

  @Input() stockSymbol: string;
  @Input() quantity: number;

}
