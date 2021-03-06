/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/pages/blank-page/components/blank_page';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_BlankPageComponent {
  context:import0.BlankPageComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.BlankPageComponent();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_BlankPageComponent_Host:import2.RenderComponentType = (null as any);
class _View_BlankPageComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _BlankPageComponent_0_4:Wrapper_BlankPageComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_BlankPageComponent_Host0,renderType_BlankPageComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('blank-page',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BlankPageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BlankPageComponent_0_4 = new Wrapper_BlankPageComponent();
    this._appEl_0.initComponent(this._BlankPageComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._BlankPageComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BlankPageComponent) && (0 === requestNodeIndex))) { return this._BlankPageComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BlankPageComponent_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_BlankPageComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_BlankPageComponent_Host === (null as any))) { (renderType_BlankPageComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_BlankPageComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BlankPageComponentNgFactory:import9.ComponentFactory<import0.BlankPageComponent> = new import9.ComponentFactory<import0.BlankPageComponent>('blank-page',viewFactory_BlankPageComponent_Host0,import0.BlankPageComponent);
const styles_BlankPageComponent:any[] = ([] as any[]);
var renderType_BlankPageComponent:import2.RenderComponentType = (null as any);
class _View_BlankPageComponent0 extends import1.AppView<import0.BlankPageComponent> {
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_BlankPageComponent0,renderType_BlankPageComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this.init(([] as any[]),([] as any[]),([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_BlankPageComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.BlankPageComponent> {
  if ((renderType_BlankPageComponent === (null as any))) { (renderType_BlankPageComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_BlankPageComponent,{})); }
  return new _View_BlankPageComponent0(viewUtils,parentInjector,declarationEl);
}