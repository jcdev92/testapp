import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public minCounterValue: number = 10;
  public counter: number = this.minCounterValue;

  public increment(value: number): void {
    this.counter += value;
  }

  public decrement(value: number): void {
    if (this.counter > this.minCounterValue) {
      this.counter -= value;
    }
  }

  public resetCounter(): void {
    this.counter = this.minCounterValue;
  }
}
