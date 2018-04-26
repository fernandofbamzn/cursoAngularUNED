import { Component, OnInit} from '@angular/core';
import { routes } from '../../app-routing.module';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  routesApp = routes ;
  constructor() {

  }

  ngOnInit() {
  }

}
