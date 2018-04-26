import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../clases/Hero';
@Component({
  selector: 'app-detalle-mod-heroe',
  templateUrl: './detalle-mod-heroe.component.html',
  styleUrls: ['./detalle-mod-heroe.component.css']
})
export class DetalleModHeroeComponent implements OnInit {
  estados: String[] = ['happy', 'sad', 'confused', ''];
  // tslint:disable-next-line:no-input-rename
  @Input('heroedetalle') Heroe = new Hero(0, '');
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEliminar = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit() {
  }
  eliminarHeroe() {
    this.onEliminar.emit(this.Heroe);
    this.Heroe = new Hero(0, '');
  }
}
