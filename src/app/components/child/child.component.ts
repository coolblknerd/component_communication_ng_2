import { Component, ViewEncapsulation, Input, OnChanges, SimpleChange } from '@angular/core';

interface IChanges { [key: string]: SimpleChange }

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };
  message: string = 'Initial message';

  ngOnChanges(changes: IChanges) {
    console.log(JSON.stringify(changes, null, 2));
  }

}
