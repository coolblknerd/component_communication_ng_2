import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ChildComponent {
}
