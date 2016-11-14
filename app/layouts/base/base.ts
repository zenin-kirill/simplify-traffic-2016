import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'st-app',
  templateUrl: 'base.html',
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef) {
	    // You need this small hack in order to catch application root view container ref
	    this.viewContainerRef = viewContainerRef;
	}
}

//todo: нарушена структура файлов, необходимо исправить
