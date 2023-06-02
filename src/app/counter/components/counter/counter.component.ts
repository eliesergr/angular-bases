import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increase(1)">+1</button>
  <button (click)="increase(-counter+10)">Reset</button>
  <button (click)="increase(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  public title: string = 'The title of my page';
  public counter: number = 10;

  increase(value: number): void {
    this.counter+=value;
  }

  ngOnInit() { }
}
