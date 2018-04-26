import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  numero = 2;
  texto = 'Trasteando con pipes';
  miFecha = new Date();
  constructor() { }

  ngOnInit() {
  }

}
