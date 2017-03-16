import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildAPIComponent } from '../child-api/child-api.component';

@Component({
  selector: 'parent-api',
  templateUrl: './parent-api.component.html',
  styleUrls: ['./parent-api.component.css']
})
export class ParentAPIComponent {

  @ViewChild('child1')
  firstChild: ChildAPIComponent;

  ngAfterViewInit() {
    this.firstChild.greet('Child 1');
  }

}
