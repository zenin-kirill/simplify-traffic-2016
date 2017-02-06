/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../app/pages/agencies-table/components/agencies_table';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/common/src/location/location_strategy';
import * as import14 from '@angular/router/src/directives/router_link';
export var Wrapper_AgenciesTableComponent = (function () {
    function Wrapper_AgenciesTableComponent() {
        this.changed = false;
        this.context = new import0.AgenciesTableComponent();
    }
    Wrapper_AgenciesTableComponent.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_AgenciesTableComponent;
}());
var renderType_AgenciesTableComponent_Host = null;
var _View_AgenciesTableComponent_Host0 = (function (_super) {
    __extends(_View_AgenciesTableComponent_Host0, _super);
    function _View_AgenciesTableComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AgenciesTableComponent_Host0, renderType_AgenciesTableComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AgenciesTableComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('agencies-table', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AgenciesTableComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AgenciesTableComponent_0_4 = new Wrapper_AgenciesTableComponent();
        this._appEl_0.initComponent(this._AgenciesTableComponent_0_4.context, [], compView_0);
        compView_0.create(this._AgenciesTableComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AgenciesTableComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AgenciesTableComponent) && (0 === requestNodeIndex))) {
            return this._AgenciesTableComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AgenciesTableComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AgenciesTableComponent_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AgenciesTableComponent_Host0;
}(import1.AppView));
function viewFactory_AgenciesTableComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AgenciesTableComponent_Host === null)) {
        (renderType_AgenciesTableComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AgenciesTableComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AgenciesTableComponentNgFactory = new import9.ComponentFactory('agencies-table', viewFactory_AgenciesTableComponent_Host0, import0.AgenciesTableComponent);
var styles_AgenciesTableComponent = [];
var renderType_AgenciesTableComponent = null;
var _View_AgenciesTableComponent0 = (function (_super) {
    __extends(_View_AgenciesTableComponent0, _super);
    function _View_AgenciesTableComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AgenciesTableComponent0, renderType_AgenciesTableComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AgenciesTableComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container-fluid');
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'row');
        this.renderer.setElementAttribute(this._el_3, 'style', 'margin: 1rem;');
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'col-xl-12 text-xs-center');
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'h2', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'page-header');
        this._text_8 = this.renderer.createText(this._el_7, '\n              Agencies management\n            ', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_11 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_13 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_14 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_16 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'row');
        this._text_22 = this.renderer.createText(this._el_21, '\n        ', null);
        this._el_23 = this.renderer.createElement(this._el_21, 'div', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'col-xl-12');
        this._text_24 = this.renderer.createText(this._el_23, '\n          ', null);
        this._text_25 = this.renderer.createText(this._el_23, '\n            ', null);
        this._el_26 = this.renderer.createElement(this._el_23, 'table', null);
        this.renderer.setElementAttribute(this._el_26, 'class', 'table table-hover');
        this._text_27 = this.renderer.createText(this._el_26, '\n              ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'thead', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'thead-inverse');
        this._text_29 = this.renderer.createText(this._el_28, '\n              ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'tr', null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                ', null);
        this._text_32 = this.renderer.createText(this._el_30, '\n                ', null);
        this._el_33 = this.renderer.createElement(this._el_30, 'th', null);
        this._text_34 = this.renderer.createText(this._el_33, 'Name', null);
        this._text_35 = this.renderer.createText(this._el_30, '\n                ', null);
        this._el_36 = this.renderer.createElement(this._el_30, 'th', null);
        this._text_37 = this.renderer.createText(this._el_36, 'City', null);
        this._text_38 = this.renderer.createText(this._el_30, '\n                ', null);
        this._el_39 = this.renderer.createElement(this._el_30, 'th', null);
        this._text_40 = this.renderer.createText(this._el_39, 'Phone', null);
        this._text_41 = this.renderer.createText(this._el_30, '\n                ', null);
        this._el_42 = this.renderer.createElement(this._el_30, 'th', null);
        this._text_43 = this.renderer.createText(this._el_42, 'Contact', null);
        this._text_44 = this.renderer.createText(this._el_30, '\n                ', null);
        this._text_45 = this.renderer.createText(this._el_30, '\n                ', null);
        this._el_46 = this.renderer.createElement(this._el_30, 'th', null);
        this.renderer.setElementAttribute(this._el_46, 'class', 'text-xs-right');
        this._text_47 = this.renderer.createText(this._el_46, '\n                  ', null);
        this._el_48 = this.renderer.createElement(this._el_46, 'button', null);
        this.renderer.setElementAttribute(this._el_48, 'class', 'btn btn-success-outline btn-sm');
        this.renderer.setElementAttribute(this._el_48, 'type', 'button');
        this._RouterLink_48_3 = new import10.Wrapper_RouterLink(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._el_49 = this.renderer.createElement(this._el_48, 'i', null);
        this.renderer.setElementAttribute(this._el_49, 'class', 'fa fa-plus fa-lg');
        this._text_50 = this.renderer.createText(this._el_46, '\n                ', null);
        this._text_51 = this.renderer.createText(this._el_30, '\n              ', null);
        this._text_52 = this.renderer.createText(this._el_28, '\n              ', null);
        this._text_53 = this.renderer.createText(this._el_26, '\n              ', null);
        this._el_54 = this.renderer.createElement(this._el_26, 'tbody', null);
        this._text_55 = this.renderer.createText(this._el_54, '\n              ', null);
        this._el_56 = this.renderer.createElement(this._el_54, 'tr', null);
        this._RouterLink_56_3 = new import10.Wrapper_RouterLink(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_57 = this.renderer.createText(this._el_56, '\n                ', null);
        this._el_58 = this.renderer.createElement(this._el_56, 'th', null);
        this.renderer.setElementAttribute(this._el_58, 'scope', 'row');
        this._text_59 = this.renderer.createText(this._el_58, 'WestLine', null);
        this._text_60 = this.renderer.createText(this._el_56, '\n                ', null);
        this._el_61 = this.renderer.createElement(this._el_56, 'td', null);
        this._text_62 = this.renderer.createText(this._el_61, 'Moscow', null);
        this._text_63 = this.renderer.createText(this._el_56, '\n                ', null);
        this._el_64 = this.renderer.createElement(this._el_56, 'td', null);
        this._text_65 = this.renderer.createText(this._el_64, '+74956567676', null);
        this._text_66 = this.renderer.createText(this._el_56, '\n                ', null);
        this._el_67 = this.renderer.createElement(this._el_56, 'td', null);
        this._text_68 = this.renderer.createText(this._el_67, 'Dmitry', null);
        this._text_69 = this.renderer.createText(this._el_56, '\n                ', null);
        this._text_70 = this.renderer.createText(this._el_56, '\n                ', null);
        this._text_71 = this.renderer.createText(this._el_56, '\n                ', null);
        this._el_72 = this.renderer.createElement(this._el_56, 'td', null);
        this.renderer.setElementAttribute(this._el_72, 'class', 'text-xs-right');
        this._text_73 = this.renderer.createText(this._el_72, '\n                  ', null);
        this._el_74 = this.renderer.createElement(this._el_72, 'button', null);
        this.renderer.setElementAttribute(this._el_74, 'class', 'btn btn-primary-outline btn-sm');
        this.renderer.setElementAttribute(this._el_74, 'type', 'button');
        this._RouterLink_74_3 = new import10.Wrapper_RouterLink(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._el_75 = this.renderer.createElement(this._el_74, 'i', null);
        this.renderer.setElementAttribute(this._el_75, 'class', 'fa fa-pencil fa-lg');
        this._text_76 = this.renderer.createText(this._el_72, '\n                   \n                  ', null);
        this._el_77 = this.renderer.createElement(this._el_72, 'button', null);
        this.renderer.setElementAttribute(this._el_77, 'class', 'btn btn-danger-outline btn-sm');
        this.renderer.setElementAttribute(this._el_77, 'type', 'button');
        this._RouterLink_77_3 = new import10.Wrapper_RouterLink(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._el_78 = this.renderer.createElement(this._el_77, 'i', null);
        this.renderer.setElementAttribute(this._el_78, 'class', 'fa fa fa-trash fa-lg');
        this._text_79 = this.renderer.createText(this._el_72, '\n                ', null);
        this._text_80 = this.renderer.createText(this._el_56, '\n              ', null);
        this._text_81 = this.renderer.createText(this._el_54, '\n              ', null);
        this._el_82 = this.renderer.createElement(this._el_54, 'tr', null);
        this._text_83 = this.renderer.createText(this._el_82, '\n                ', null);
        this._el_84 = this.renderer.createElement(this._el_82, 'th', null);
        this.renderer.setElementAttribute(this._el_84, 'scope', 'row');
        this._text_85 = this.renderer.createText(this._el_84, 'MosGorTrans', null);
        this._text_86 = this.renderer.createText(this._el_82, '\n                ', null);
        this._el_87 = this.renderer.createElement(this._el_82, 'td', null);
        this._text_88 = this.renderer.createText(this._el_87, 'Moscow', null);
        this._text_89 = this.renderer.createText(this._el_82, '\n                ', null);
        this._el_90 = this.renderer.createElement(this._el_82, 'td', null);
        this._text_91 = this.renderer.createText(this._el_90, '+74994562343', null);
        this._text_92 = this.renderer.createText(this._el_82, '\n                ', null);
        this._el_93 = this.renderer.createElement(this._el_82, 'td', null);
        this._text_94 = this.renderer.createText(this._el_93, 'Svetlana', null);
        this._text_95 = this.renderer.createText(this._el_82, '\n                ', null);
        this._text_96 = this.renderer.createText(this._el_82, '\n                ', null);
        this._text_97 = this.renderer.createText(this._el_82, '\n                ', null);
        this._el_98 = this.renderer.createElement(this._el_82, 'td', null);
        this.renderer.setElementAttribute(this._el_98, 'class', 'text-xs-right');
        this._text_99 = this.renderer.createText(this._el_98, '\n                  ', null);
        this._el_100 = this.renderer.createElement(this._el_98, 'button', null);
        this.renderer.setElementAttribute(this._el_100, 'class', 'btn btn-primary-outline btn-sm');
        this.renderer.setElementAttribute(this._el_100, 'type', 'button');
        this._RouterLink_100_3 = new import10.Wrapper_RouterLink(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._el_101 = this.renderer.createElement(this._el_100, 'i', null);
        this.renderer.setElementAttribute(this._el_101, 'class', 'fa fa-pencil fa-lg');
        this._text_102 = this.renderer.createText(this._el_98, '\n                   \n                  ', null);
        this._el_103 = this.renderer.createElement(this._el_98, 'button', null);
        this.renderer.setElementAttribute(this._el_103, 'class', 'btn btn-danger-outline btn-sm');
        this.renderer.setElementAttribute(this._el_103, 'type', 'button');
        this._RouterLink_103_3 = new import10.Wrapper_RouterLink(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._el_104 = this.renderer.createElement(this._el_103, 'i', null);
        this.renderer.setElementAttribute(this._el_104, 'class', 'fa fa fa-trash fa-lg');
        this._text_105 = this.renderer.createText(this._el_98, '\n                ', null);
        this._text_106 = this.renderer.createText(this._el_82, '\n              ', null);
        this._text_107 = this.renderer.createText(this._el_54, '\n              ', null);
        this._text_108 = this.renderer.createText(this._el_26, '\n            ', null);
        this._text_109 = this.renderer.createText(this._el_23, '\n          ', null);
        this._text_110 = this.renderer.createText(this._el_23, '\n        ', null);
        this._text_111 = this.renderer.createText(this._el_21, '\n    ', null);
        this._text_112 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_113 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_114 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_48, 'click', this.eventHandler(this._handle_click_48_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        var disposable_1 = this.renderer.listen(this._el_56, 'click', this.eventHandler(this._handle_click_56_0.bind(this)));
        this._arr_1 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        var disposable_2 = this.renderer.listen(this._el_74, 'click', this.eventHandler(this._handle_click_74_0.bind(this)));
        this._arr_2 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        var disposable_3 = this.renderer.listen(this._el_77, 'click', this.eventHandler(this._handle_click_77_0.bind(this)));
        this._arr_3 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        var disposable_4 = this.renderer.listen(this._el_100, 'click', this.eventHandler(this._handle_click_100_0.bind(this)));
        this._arr_4 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        var disposable_5 = this.renderer.listen(this._el_103, 'click', this.eventHandler(this._handle_click_103_0.bind(this)));
        this._arr_5 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
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
            this._text_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._el_74,
            this._el_75,
            this._text_76,
            this._el_77,
            this._el_78,
            this._text_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._text_89,
            this._el_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._text_95,
            this._text_96,
            this._text_97,
            this._el_98,
            this._text_99,
            this._el_100,
            this._el_101,
            this._text_102,
            this._el_103,
            this._el_104,
            this._text_105,
            this._text_106,
            this._text_107,
            this._text_108,
            this._text_109,
            this._text_110,
            this._text_111,
            this._text_112,
            this._text_113,
            this._text_114
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ], []);
        return null;
    };
    _View_AgenciesTableComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLink) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._RouterLink_48_3.context;
        }
        if (((token === import14.RouterLink) && ((74 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._RouterLink_74_3.context;
        }
        if (((token === import14.RouterLink) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._RouterLink_77_3.context;
        }
        if (((token === import14.RouterLink) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._RouterLink_56_3.context;
        }
        if (((token === import14.RouterLink) && ((100 <= requestNodeIndex) && (requestNodeIndex <= 101)))) {
            return this._RouterLink_100_3.context;
        }
        if (((token === import14.RouterLink) && ((103 <= requestNodeIndex) && (requestNodeIndex <= 104)))) {
            return this._RouterLink_103_3.context;
        }
        return notFoundResult;
    };
    _View_AgenciesTableComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this._arr_0('new');
        this._RouterLink_48_3.check_routerLink(currVal_1, throwOnChange, false);
        this._RouterLink_48_3.detectChangesInternal(this, this._el_48, throwOnChange);
        var currVal_3 = this._arr_1('1');
        this._RouterLink_56_3.check_routerLink(currVal_3, throwOnChange, false);
        this._RouterLink_56_3.detectChangesInternal(this, this._el_56, throwOnChange);
        var currVal_5 = this._arr_2('edit', '1');
        this._RouterLink_74_3.check_routerLink(currVal_5, throwOnChange, false);
        this._RouterLink_74_3.detectChangesInternal(this, this._el_74, throwOnChange);
        var currVal_7 = this._arr_3('new');
        this._RouterLink_77_3.check_routerLink(currVal_7, throwOnChange, false);
        this._RouterLink_77_3.detectChangesInternal(this, this._el_77, throwOnChange);
        var currVal_9 = this._arr_4('edit', '1');
        this._RouterLink_100_3.check_routerLink(currVal_9, throwOnChange, false);
        this._RouterLink_100_3.detectChangesInternal(this, this._el_100, throwOnChange);
        var currVal_11 = this._arr_5('new');
        this._RouterLink_103_3.check_routerLink(currVal_11, throwOnChange, false);
        this._RouterLink_103_3.detectChangesInternal(this, this._el_103, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AgenciesTableComponent0.prototype._handle_click_48_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_48_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_AgenciesTableComponent0.prototype._handle_click_56_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_56_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_AgenciesTableComponent0.prototype._handle_click_74_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_74_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_AgenciesTableComponent0.prototype._handle_click_77_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_77_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_AgenciesTableComponent0.prototype._handle_click_100_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_100_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_AgenciesTableComponent0.prototype._handle_click_103_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_103_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_AgenciesTableComponent0;
}(import1.AppView));
export function viewFactory_AgenciesTableComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AgenciesTableComponent === null)) {
        (renderType_AgenciesTableComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_AgenciesTableComponent, {}));
    }
    return new _View_AgenciesTableComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=agencies_table.ngfactory.js.map