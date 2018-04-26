import { Component, OnInit } from '@angular/core';
import { Hero } from '../../clases/Hero';
import 'rxjs/add/operator/filter';
import { MockService } from '../../servicios/mock.service';
import { HeroeService } from '../../servicios/heroe.service';

@Component({
  selector: 'app-maestro-heroe',
  templateUrl: './maestro-heroe.component.html',
  styleUrls: ['./maestro-heroe.component.css']
})
export class MaestroHeroeComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  estados: String[] = ['happy', 'sad', 'confused', ''];
  nuevoHeroe = new Hero(0, '');
  constructor(private heroeService: HeroeService) {
    this.heroeService.getHeroes().subscribe(
      x => this.heroes = x
    );
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
