import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  listado: string = 'listado de heroes';
  heroes: string[] = ['Iron man', 'Spiderman', 'Hulk', 'Thor', 'Cap'];
  heroeBorrado: string[] = [];

  deleteHero(): void {
    const heroeDelete = this.heroes.splice(0, 1);
    heroeDelete.length !== 0
      ? this.heroeBorrado.push(heroeDelete[0])
      : (this.heroeBorrado = []);
  }
}
