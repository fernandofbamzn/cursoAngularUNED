import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const Obs1 = Observable.create(function(emiter) {
      emiter.next('Hello');
      emiter.next('World');
      emiter.complete();
  });
    Obs1.subscribe(
      function(x) {console.log('Emision: ', x); },
      function(e) {console.log('Error: ', e); },
      function() {console.log('Fin '); }
    );
    const Obs2 = Observable.create(function(emiter) {
      let value = 0;
      const interval = setInterval(() => {
         if (value % 2 === 0) {
          emiter.next(value);
         }
        value++;
      }, 1000);
      return () => {clearInterval(interval); console.log('Me he quedado sin observador'); };
    });
    const subs2 = Obs2.subscribe(x => console.log('sub2:', x));

    setTimeout(() => {
      subs2.unsubscribe();
    }, 10000);
    setTimeout(() => {
      const subs3 = Obs2.subscribe(x => console.log('sub3:', x));
    }, 5000);

  }
}
