import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../clases/Hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroeService {
  private heroesUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web API
  constructor(private httpService: HttpClient) { }
  getHeroes(): Observable<any> {
    return this.httpService.get(this.heroesUrl);
  }
}
