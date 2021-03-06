/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/layouts/admin-panel/components/admin_panel';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../shared/topnav/topnav.ngfactory';
import * as import11 from '../../../shared/sidebar/sidebar.ngfactory';
import * as import12 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '@angular/router/src/router_outlet_map';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '../../../../../app/shared/topnav/topnav';
import * as import16 from '../../../../../app/shared/sidebar/sidebar';
import * as import17 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AdminPanelComponent {
  context:import0.AdminPanelComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.AdminPanelComponent();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_AdminPanelComponent_Host:import2.RenderComponentType = (null as any);
class _View_AdminPanelComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AdminPanelComponent_0_4:Wrapper_AdminPanelComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AdminPanelComponent_Host0,renderType_AdminPanelComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('admin-panel',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AdminPanelComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AdminPanelComponent_0_4 = new Wrapper_AdminPanelComponent();
    this._appEl_0.initComponent(this._AdminPanelComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AdminPanelComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AdminPanelComponent) && (0 === requestNodeIndex))) { return this._AdminPanelComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AdminPanelComponent_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AdminPanelComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AdminPanelComponent_Host === (null as any))) { (renderType_AdminPanelComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AdminPanelComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AdminPanelComponentNgFactory:import9.ComponentFactory<import0.AdminPanelComponent> = new import9.ComponentFactory<import0.AdminPanelComponent>('admin-panel',viewFactory_AdminPanelComponent_Host0,import0.AdminPanelComponent);
const styles_AdminPanelComponent:any[] = ([] as any[]);
var renderType_AdminPanelComponent:import2.RenderComponentType = (null as any);
class _View_AdminPanelComponent0 extends import1.AppView<import0.AdminPanelComponent> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _TopNavComponent_0_4:import10.Wrapper_TopNavComponent;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _SidebarComponent_2_4:import11.Wrapper_SidebarComponent;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import3.AppElement;
  _RouterOutlet_8_5:import12.Wrapper_RouterOutlet;
  _text_9:any;
  _text_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AdminPanelComponent0,renderType_AdminPanelComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'top-nav',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import10.viewFactory_TopNavComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TopNavComponent_0_4 = new import10.Wrapper_TopNavComponent();
    this._appEl_0.initComponent(this._TopNavComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._TopNavComponent_0_4.context,([] as any[]),(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'sidebar-cmp',(null as any));
    this._appEl_2 = new import3.AppElement(2,(null as any),this,this._el_2);
    var compView_2:any = import11.viewFactory_SidebarComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._SidebarComponent_2_4 = new import11.Wrapper_SidebarComponent();
    this._appEl_2.initComponent(this._SidebarComponent_2_4.context,([] as any[]),compView_2);
    compView_2.create(this._SidebarComponent_2_4.context,([] as any[]),(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = this.renderer.createElement(parentRenderNode,'section',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','main-container');
    this._text_6 = this.renderer.createText(this._el_5,' ',(null as any));
    this._text_7 = this.renderer.createText(this._el_5,'\n	',(null as any));
    this._el_8 = this.renderer.createElement(this._el_5,'router-outlet',(null as any));
    this._appEl_8 = new import3.AppElement(8,5,this,this._el_8);
    this._RouterOutlet_8_5 = new import12.Wrapper_RouterOutlet(this.parentInjector.get(import13.RouterOutletMap),this._appEl_8.vcRef,this.parentInjector.get(import14.ComponentFactoryResolver),(null as any));
    this._text_9 = this.renderer.createText(this._el_5,'\n',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TopNavComponent) && (0 === requestNodeIndex))) { return this._TopNavComponent_0_4.context; }
    if (((token === import16.SidebarComponent) && (2 === requestNodeIndex))) { return this._SidebarComponent_2_4.context; }
    if (((token === import17.RouterOutlet) && (8 === requestNodeIndex))) { return this._RouterOutlet_8_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TopNavComponent_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this._SidebarComponent_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    this._RouterOutlet_8_5.detectChangesInternal(this,this._el_8,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterOutlet_8_5.context.ngOnDestroy();
  }
}
export function viewFactory_AdminPanelComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AdminPanelComponent> {
  if ((renderType_AdminPanelComponent === (null as any))) { (renderType_AdminPanelComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_AdminPanelComponent,{})); }
  return new _View_AdminPanelComponent0(viewUtils,parentInjector,declarationEl);
}