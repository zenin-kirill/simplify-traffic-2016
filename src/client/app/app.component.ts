import { Component, ViewContainerRef } from "@angular/core";
import { Config } from "./env.config";

@Component({
             moduleId: module.id,
             selector: 'app-base',
             templateUrl: 'app.component.html'
           })

/**
 * Main component, that intergrate in index.html
 */
export class AppComponent {
  viewContainerRef: any = null;

  constructor(viewContainerRef: ViewContainerRef) {
    // you need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    // uutput to console configuration of assembled application
    console.log('Environment config', Config);
  }
}
