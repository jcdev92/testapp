import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 0;

  public increment(value: number): void {
    this.counter += value;
  }

  public decrement(value: number): void {
    if (this.counter > 0) {
      this.counter -= value;
    }
  }
}
