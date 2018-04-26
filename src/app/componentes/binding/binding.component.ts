import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
  <h2>{{title}}</h2>

  <div appHighlight [highlightColor]="color">El héroe se llama {{nombre}}</div>

  <button (click)="onClickMe()">Click me!</button>
  <div>{{clickMessage}}</div>

  <input [(ngModel)]="nombre" />
  `,
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title = 'Data binding';
  clickMessage = '';
  nombre = 'Superman';
  color = null;
  constructor() {
    const that = this;
    setTimeout(function() {
      console.log('timeout');
      that.nombre = 'Batman';
      that.color = 'yellow';
    }, 5000);
  }
  onClickMe() {
    this.nombre = 'Deadpool';
    this.clickMessage = this.nombre;
    this.color = 'red';
  }
  ngOnInit() {
  }

}
