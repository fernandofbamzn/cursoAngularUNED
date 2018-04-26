import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-prueba',
  templateUrl: './mi-prueba.component.html',
  styleUrls: ['./mi-prueba.component.css']
})
export class MiPruebaComponent implements OnInit {

  constructor() { }

  public titulo: String = 'Primer componente';
  num1 = 1;
  num2 = 2;
  esconder = false;
  ngOnInit() {
  }
}
