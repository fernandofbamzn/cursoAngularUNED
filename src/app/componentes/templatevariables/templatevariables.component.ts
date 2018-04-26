import { Component, OnInit } from '@angular/core';
import { MockService } from '../../servicios/mock.service';
import { Hero } from '../../clases/Hero';

@Component({
  selector: 'app-templatevariables',
  templateUrl: './templatevariables.component.html',
  styleUrls: ['./templatevariables.component.css']
})
export class TemplatevariablesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroeService: MockService) {
    this.heroes = this.heroeService.getHeroes();
  }
  values = '';
  valuesTemp = '';
  ngOnInit() {
  }
  onKey(evento: KeyboardEvent) {
    console.log(evento);
    if (evento.keyCode !== 13) {
      this.valuesTemp = this.valuesTemp + evento.key;
    } else {
      this.values = this.valuesTemp;
      this.valuesTemp = '';
    }

  }
  onKey2(letra: string) {
    this.values = this.values + letra;
  }
  onAddHeroe(heroe: string) {
    console.log('hola');
    if (heroe !== '') {
      const nuevoHeroe = new Hero(this.nuevoID(), heroe);
      this.heroes.push(nuevoHeroe);
    }

  }
  nuevoID() {
    let mayorID = 0;
    this.heroes.forEach(her => {
      if (her.id > mayorID) {
        mayorID = her.id;
      }
    });
    mayorID = mayorID + 1;
    return mayorID;
  }
}

