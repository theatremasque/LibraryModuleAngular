import {Component, Input} from '@angular/core';

@Component({
  selector: 'td[app-state-box]',
  templateUrl: './state-box.component.html',
  styleUrl: './state-box.component.css'
})
export class StateBoxComponent {
  @Input() state?: boolean;

  constructor() {
    this.state = false
  }
}
