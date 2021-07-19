import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 10000,
  };
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 8500 },
  ];

  agregarPeronaje(personaje: Personaje) {
    this.personajes.push(personaje);
  }
}
