import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

import {BUTTON_DIRECTIVES, DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'ST-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES, BUTTON_DIRECTIVES, DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  templateUrl: 'app/ST-app.html',
})
@RouteConfig([
  { path: '/home',       component: Home,        name: 'Home', useAsDefault: true },
  { path: '/about',      component: About,       name: 'About' },
  { path: '/github/...', component: RepoBrowser, name: 'RepoBrowser' },
])
export class STApp {

  constructor() {}

}
export class ButtonsDemo {
  public singleModel:string = '1';
}
