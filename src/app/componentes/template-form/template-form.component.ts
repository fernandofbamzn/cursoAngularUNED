import { Component, OnInit } from '@angular/core';
import { Hero } from '../../clases/Hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  hero = new Hero(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // Hacemos nuestras movidas

    this.hero = new Hero(0, '');
  }

}
