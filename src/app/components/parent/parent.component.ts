import { Component, ViewEncapsulation, enableProdMode } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ParentComponent {
  greeting: string = `Hello`;
  user: { name: string } = { name: 'John' };
}

// enableProdMode();
