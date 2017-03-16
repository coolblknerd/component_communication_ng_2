import { Component } from '@angular/core';

@Component({
  selector: 'child-api',
  templateUrl: './child-api.component.html',
  styleUrls: ['./child-api.component.css']
})
export class ChildAPIComponent {

  greet(name) {
    console.log(`Hello from ${name}`);
  }

}
