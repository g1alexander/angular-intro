import {Component} from "@angular/core";

@Component({
  selector: 'app-count',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ count }}</span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class CountComponent {
  base: number = 5;
  title: string = 'Contador App';
  count: number = 0;

  acumular(value: number) {
    this.count += value;
  }
}
