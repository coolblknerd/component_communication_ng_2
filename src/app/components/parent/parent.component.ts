import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ParentComponent {
  todaysDate: string = new Date().toLocaleDateString();
}
