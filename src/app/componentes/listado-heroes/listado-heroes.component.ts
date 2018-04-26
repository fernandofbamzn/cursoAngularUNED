import { Component, OnInit } from '@angular/core';
import { Hero } from '../../clases/Hero';
import { HEROES} from '../../clases/heroes-mock';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  estados: String[] = ['happy', 'sad', 'confused', ''];
  nuevoHeroe = new Hero(0, '');

  constructor() {
    this.heroes = HEROES;
   }

  ngOnInit() {
  }
  borrarHeroe(her: Hero) {
    this.heroes.splice(this.heroes.indexOf(her), 1);
  }

  addHeroe() {
    this.nuevoHeroe.id = this.nuevoID();
    this.heroes.push(this.nuevoHeroe);
    this.nuevoHeroe = new Hero(0, '');
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
