import { Component, ViewContainerRef } from "@angular/core";
import { Config } from "./env.config";

@Component({
             moduleId: module.id,
             selector: 'app-base',
             templateUrl: 'app.component.html',
           })

/**
 * Главный компонент, который интегрируется в index.html
 */
export class AppComponent {
  viewContainerRef: any = null;

  constructor(viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    // вывод в консоль конфигурации собранного приложения
    console.log('Environment config', Config);
  }
}
