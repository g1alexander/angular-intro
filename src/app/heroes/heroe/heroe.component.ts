import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Iron man';
  age: number = 40;

  get capitalizado(): string {
    return this.name.toUpperCase();
  }

  getNameAge(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 20;
  }
}
