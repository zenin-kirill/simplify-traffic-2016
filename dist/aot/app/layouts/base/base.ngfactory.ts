/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../app/layouts/base/base';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/router_outlet_map';
import * as import16 from '@angular/core/src/linker/component_factory_resolver';
import * as import17 from '@angular/router/src/directives/router_link';
import * as import18 from '@angular/router/src/directives/router_outlet';
import * as import19 from '@angular/core/src/security';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.AppComponent(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AppComponent_0_5:Wrapper_AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('st-app',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_5 = new Wrapper_AppComponent(this._appEl_0.vcRef);
    this._appEl_0.initComponent(this._AppComponent_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._appEl_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import9.ComponentFactory<import0.AppComponent> = new import9.ComponentFactory<import0.AppComponent>('st-app',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _RouterLinkWithHref_0_3:import10.Wrapper_RouterLinkWithHref;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _RouterOutlet_2_5:import11.Wrapper_RouterOutlet;
  _arr_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'a',(null as any));
    this._RouterLinkWithHref_0_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import12.Router),this.parentInjector.get(import13.ActivatedRoute),this.parentInjector.get(import14.LocationStrategy));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'router-outlet',(null as any));
    this._appEl_2 = new import3.AppElement(2,(null as any),this,this._el_2);
    this._RouterOutlet_2_5 = new import11.Wrapper_RouterOutlet(this.parentInjector.get(import15.RouterOutletMap),this._appEl_2.vcRef,this.parentInjector.get(import16.ComponentFactoryResolver),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.RouterLinkWithHref) && (0 === requestNodeIndex))) { return this._RouterLinkWithHref_0_3.context; }
    if (((token === import18.RouterOutlet) && (2 === requestNodeIndex))) { return this._RouterOutlet_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this._arr_0('/');
    this._RouterLinkWithHref_0_3.check_routerLink(currVal_1,throwOnChange,false);
    this._RouterLinkWithHref_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._RouterOutlet_2_5.detectChangesInternal(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_0_3.context.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'href',this.viewUtils.sanitizer.sanitize(import19.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_0_3.context.ngOnDestroy();
    this._RouterOutlet_2_5.context.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_0_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}