import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock: string;

  onInputEvent({target}): void {
    this.stock = target.value;
  }
}
