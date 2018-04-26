import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  numero1: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  numero2: number = 1;
  constructor() { }
  suma(num1: number, num2: number) {
    return (+num1) + (+num2);
  }
  resta(num1: number, num2: number) {
    return num1 - num2;
  }
  multiplicacion(num1: number, num2: number) {
    return num1 * num2;
  }
  division(num1: number, num2: number) {
    return num1 / num2;
  }
  ngOnInit() {
  }

}
