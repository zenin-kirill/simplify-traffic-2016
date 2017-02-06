/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../app/pages/dashboard/components/notifications_list';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_NotificationsListComponent {
  context:import0.NotificationsListComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.NotificationsListComponent();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_NotificationsListComponent_Host:import2.RenderComponentType = (null as any);
class _View_NotificationsListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _NotificationsListComponent_0_4:Wrapper_NotificationsListComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_NotificationsListComponent_Host0,renderType_NotificationsListComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('notifications-list',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NotificationsListComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NotificationsListComponent_0_4 = new Wrapper_NotificationsListComponent();
    this._appEl_0.initComponent(this._NotificationsListComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NotificationsListComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NotificationsListComponent) && (0 === requestNodeIndex))) { return this._NotificationsListComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NotificationsListComponent_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NotificationsListComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_NotificationsListComponent_Host === (null as any))) { (renderType_NotificationsListComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NotificationsListComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NotificationsListComponentNgFactory:import9.ComponentFactory<import0.NotificationsListComponent> = new import9.ComponentFactory<import0.NotificationsListComponent>('notifications-list',viewFactory_NotificationsListComponent_Host0,import0.NotificationsListComponent);
const styles_NotificationsListComponent:any[] = ([] as any[]);
var renderType_NotificationsListComponent:import2.RenderComponentType = (null as any);
class _View_NotificationsListComponent0 extends import1.AppView<import0.NotificationsListComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _text_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _el_58:any;
  _el_59:any;
  _text_60:any;
  _text_61:any;
  _text_62:any;
  _text_63:any;
  _text_64:any;
  _el_65:any;
  _text_66:any;
  _text_67:any;
  _text_68:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_NotificationsListComponent0,renderType_NotificationsListComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','panel-body');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','list-group');
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','list-group-item text-success');
    this.renderer.setElementAttribute(this._el_4,'href','javascript:;');
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'i',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','fa fa-close fa-fw');
    this._text_7 = this.renderer.createText(this._el_4,' Bus 237 goes on schedule\n      ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_4,'span',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','pull-right text-muted small');
    this._el_9 = this.renderer.createElement(this._el_8,'em',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'13:28',(null as any));
    this._text_11 = this.renderer.createText(this._el_8,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','list-group-item text-success');
    this.renderer.setElementAttribute(this._el_14,'href','javascript:;');
    this._text_15 = this.renderer.createText(this._el_14,'\n      ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'i',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','fa fa-close fa-fw');
    this._text_17 = this.renderer.createText(this._el_14,' Bus 346 reconnected\n      ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_14,'span',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','pull-right text-muted small');
    this._el_19 = this.renderer.createElement(this._el_18,'em',(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'13:18',(null as any));
    this._text_21 = this.renderer.createText(this._el_18,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(this._el_14,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','list-group-item text-warning');
    this.renderer.setElementAttribute(this._el_24,'href','javascript:;');
    this._text_25 = this.renderer.createText(this._el_24,'\n      ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'i',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','fa fa-clock-o fa-fw');
    this._text_27 = this.renderer.createText(this._el_24,' Bus 237 is late\n      ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_24,'span',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','pull-right text-muted small');
    this._el_29 = this.renderer.createElement(this._el_28,'em',(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'13:12',(null as any));
    this._text_31 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._text_32 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_34 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_34,'class','list-group-item text-danger');
    this.renderer.setElementAttribute(this._el_34,'href','javascript:;');
    this._text_35 = this.renderer.createText(this._el_34,'\n      ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_34,'i',(null as any));
    this.renderer.setElementAttribute(this._el_36,'class','fa fa-exclamation-circle fa-fw');
    this._text_37 = this.renderer.createText(this._el_34,' Bus 275 is riding fast\n      ',(null as any));
    this._el_38 = this.renderer.createElement(this._el_34,'span',(null as any));
    this.renderer.setElementAttribute(this._el_38,'class','pull-right text-muted small');
    this._el_39 = this.renderer.createElement(this._el_38,'em',(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'12:22',(null as any));
    this._text_41 = this.renderer.createText(this._el_38,'\n            ',(null as any));
    this._text_42 = this.renderer.createText(this._el_34,'\n    ',(null as any));
    this._text_43 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_44 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_44,'class','list-group-item text-danger');
    this.renderer.setElementAttribute(this._el_44,'href','javascript:;');
    this._text_45 = this.renderer.createText(this._el_44,'\n      ',(null as any));
    this._el_46 = this.renderer.createElement(this._el_44,'i',(null as any));
    this.renderer.setElementAttribute(this._el_46,'class','fa fa-close fa-fw');
    this._text_47 = this.renderer.createText(this._el_44,' Bus 346 lost connection!\n      ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_44,'span',(null as any));
    this.renderer.setElementAttribute(this._el_48,'class','pull-right text-muted small');
    this._el_49 = this.renderer.createElement(this._el_48,'em',(null as any));
    this._text_50 = this.renderer.createText(this._el_49,'11:57',(null as any));
    this._text_51 = this.renderer.createText(this._el_48,'\n            ',(null as any));
    this._text_52 = this.renderer.createText(this._el_44,'\n    ',(null as any));
    this._text_53 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_54 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_54,'class','list-group-item text-success');
    this.renderer.setElementAttribute(this._el_54,'href','javascript:;');
    this._text_55 = this.renderer.createText(this._el_54,'\n      ',(null as any));
    this._el_56 = this.renderer.createElement(this._el_54,'i',(null as any));
    this.renderer.setElementAttribute(this._el_56,'class','fa fa-check fa-fw');
    this._text_57 = this.renderer.createText(this._el_54,' Bus 851 successfully arrived\n      ',(null as any));
    this._el_58 = this.renderer.createElement(this._el_54,'span',(null as any));
    this.renderer.setElementAttribute(this._el_58,'class','pull-right text-muted small');
    this._el_59 = this.renderer.createElement(this._el_58,'em',(null as any));
    this._text_60 = this.renderer.createText(this._el_59,'10:38',(null as any));
    this._text_61 = this.renderer.createText(this._el_58,'\n            ',(null as any));
    this._text_62 = this.renderer.createText(this._el_54,'\n    ',(null as any));
    this._text_63 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_64 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_65 = this.renderer.createElement(this._el_2,'a',(null as any));
    this.renderer.setElementAttribute(this._el_65,'class','btn btn-default btn-block');
    this.renderer.setElementAttribute(this._el_65,'href','javascript:;');
    this._text_66 = this.renderer.createText(this._el_65,'View All Alerts',(null as any));
    this._text_67 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_68 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._text_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._el_58,
      this._el_59,
      this._text_60,
      this._text_61,
      this._text_62,
      this._text_63,
      this._text_64,
      this._el_65,
      this._text_66,
      this._text_67,
      this._text_68
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_NotificationsListComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.NotificationsListComponent> {
  if ((renderType_NotificationsListComponent === (null as any))) { (renderType_NotificationsListComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_NotificationsListComponent,{})); }
  return new _View_NotificationsListComponent0(viewUtils,parentInjector,declarationEl);
}