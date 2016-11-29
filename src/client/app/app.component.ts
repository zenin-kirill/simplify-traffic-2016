import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import {Config} from './env.config';

@Component({
	moduleId: module.id,
  selector: 'app-base',
  templateUrl: 'app.component.html',
  //encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef) {
	    // You need this small hack in order to catch application root view container ref
	    this.viewContainerRef = viewContainerRef;
      console.log('Environment config', Config);
	}
}
