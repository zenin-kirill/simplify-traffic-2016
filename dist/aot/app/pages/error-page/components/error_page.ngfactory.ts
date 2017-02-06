/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/pages/error-page/components/error_page';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/common/src/location/location_strategy';
import * as import14 from '@angular/router/src/directives/router_link';
import * as import15 from '@angular/core/src/security';
export class Wrapper_ErrorPageComponent {
  context:import0.ErrorPageComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.ErrorPageComponent();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_ErrorPageComponent_Host:import2.RenderComponentType = (null as any);
class _View_ErrorPageComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ErrorPageComponent_0_4:Wrapper_ErrorPageComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ErrorPageComponent_Host0,renderType_ErrorPageComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('error-page',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ErrorPageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ErrorPageComponent_0_4 = new Wrapper_ErrorPageComponent();
    this._appEl_0.initComponent(this._ErrorPageComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ErrorPageComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ErrorPageComponent) && (0 === requestNodeIndex))) { return this._ErrorPageComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ErrorPageComponent_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ErrorPageComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ErrorPageComponent_Host === (null as any))) { (renderType_ErrorPageComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ErrorPageComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ErrorPageComponentNgFactory:import9.ComponentFactory<import0.ErrorPageComponent> = new import9.ComponentFactory<import0.ErrorPageComponent>('error-page',viewFactory_ErrorPageComponent_Host0,import0.ErrorPageComponent);
const styles_ErrorPageComponent:any[] = ([] as any[]);
var renderType_ErrorPageComponent:import2.RenderComponentType = (null as any);
class _View_ErrorPageComponent0 extends import1.AppView<import0.ErrorPageComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _RouterLinkWithHref_25_3:import10.Wrapper_RouterLinkWithHref;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ErrorPageComponent0,renderType_ErrorPageComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','row');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','col-xl-12');
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,' ',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,' ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,' ',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,' ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this.renderer.setElementAttribute(this._el_16,'align','center');
    this._el_17 = this.renderer.createElement(this._el_16,'i',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','fa fa-times-circle fa-lg');
    this._text_18 = this.renderer.createText(this._el_16,'  Error 404',(null as any));
    this._text_19 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_21 = this.renderer.createText(this._el_20,' ',(null as any));
    this._text_22 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_2,'h2',(null as any));
    this.renderer.setElementAttribute(this._el_23,'align','center');
    this._text_24 = this.renderer.createText(this._el_23,'Unknow route, link to ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'a',(null as any));
    this.renderer.setElementAttribute(this._el_25,'href','');
    this._RouterLinkWithHref_25_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import11.Router),this.parentInjector.get(import12.ActivatedRoute),this.parentInjector.get(import13.LocationStrategy));
    this._text_26 = this.renderer.createText(this._el_25,'home',(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_25,'click',this.eventHandler(this._handle_click_25_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.RouterLinkWithHref) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._RouterLinkWithHref_25_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this._arr_0('/');
    this._RouterLinkWithHref_25_3.check_routerLink(currVal_1,throwOnChange,false);
    this._RouterLinkWithHref_25_3.detectChangesInternal(this,this._el_25,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_25_3.context.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_25,'href',this.viewUtils.sanitizer.sanitize(import15.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_25_3.context.ngOnDestroy();
  }
  private _handle_click_25_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_25_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ErrorPageComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ErrorPageComponent> {
  if ((renderType_ErrorPageComponent === (null as any))) { (renderType_ErrorPageComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ErrorPageComponent,{})); }
  return new _View_ErrorPageComponent0(viewUtils,parentInjector,declarationEl);
}