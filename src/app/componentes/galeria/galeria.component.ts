import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() {
    this.imagenActual = this.imagenes[0];
    this.index = 0;
    this.tamano = 400;
   }
  title = 'Mi galería';
  imagenes = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];
  index: number;
  imagenActual: string;
  tamano: number;
  paginator_ini = 0;
  paginator_fin = 3;
  paginator_num = 3;
  ngOnInit() {
  }
  next() {
    this.index += 1;
    this.imagenActual = this.imagenes[this.index];
    if (this.paginator_fin === this.index) {
      this.sigPagina();
    }
  }
  prev() {
    if (this.paginator_ini === this.index) {
      this.prevPagina();
    }
    this.index -= 1;
    this.imagenActual = this.imagenes[this.index];
  }

  select(i) {
    this.index = i;
    this.imagenActual = this.imagenes[this.index];
  }
  prevPagina() {
    this.paginator_ini = this.paginator_ini - this.paginator_num;
    this.paginator_fin = this.paginator_fin - this.paginator_num;
    if (this.paginator_fin <= this.index) {
      this.select(this.paginator_fin - 1 );
    }
  }
  sigPagina() {
    this.paginator_ini = this.paginator_ini + this.paginator_num;
    this.paginator_fin = this.paginator_fin + this.paginator_num;
    if (this.paginator_ini > this.index) {
        this.select(this.paginator_ini);
    }
  }


}
