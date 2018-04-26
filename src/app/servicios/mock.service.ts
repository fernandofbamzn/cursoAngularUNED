import { Injectable } from '@angular/core';
import { HEROES } from '../clases/heroes-mock';
import { Hero } from '../clases/Hero';

@Injectable()
export class MockService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
