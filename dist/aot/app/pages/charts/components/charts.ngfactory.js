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
import * as import0 from '../../../../../app/pages/charts/components/charts';
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
import * as import15 from '@angular/core/src/security';
export var Wrapper_ChartComponent = (function () {
    function Wrapper_ChartComponent() {
        this.changed = false;
        this.context = new import0.ChartComponent();
    }
    Wrapper_ChartComponent.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_ChartComponent;
}());
var renderType_ChartComponent_Host = null;
var _View_ChartComponent_Host0 = (function (_super) {
    __extends(_View_ChartComponent_Host0, _super);
    function _View_ChartComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ChartComponent_Host0, renderType_ChartComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ChartComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('chart-cmp', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ChartComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ChartComponent_0_4 = new Wrapper_ChartComponent();
        this._appEl_0.initComponent(this._ChartComponent_0_4.context, [], compView_0);
        compView_0.create(this._ChartComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ChartComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ChartComponent) && (0 === requestNodeIndex))) {
            return this._ChartComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ChartComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ChartComponent_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ChartComponent_Host0;
}(import1.AppView));
function viewFactory_ChartComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ChartComponent_Host === null)) {
        (renderType_ChartComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ChartComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ChartComponentNgFactory = new import9.ComponentFactory('chart-cmp', viewFactory_ChartComponent_Host0, import0.ChartComponent);
var styles_ChartComponent = [];
var renderType_ChartComponent = null;
var _View_ChartComponent0 = (function (_super) {
    __extends(_View_ChartComponent0, _super);
    function _View_ChartComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ChartComponent0, renderType_ChartComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ChartComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container-fluid');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_3 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'row');
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'col-xl-12');
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'h1', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'page-header');
        this._text_8 = this.renderer.createText(this._el_7, '\n                Charts\n            ', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_10 = this.renderer.createElement(this._el_5, 'ol', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'breadcrumb');
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'li', null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'i', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'fa fa-dashboard');
        this._text_15 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._el_16 = this.renderer.createElement(this._el_12, 'a', null);
        this.renderer.setElementAttribute(this._el_16, 'href', 'Javascript:void(0)');
        this._RouterLinkWithHref_16_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_17 = this.renderer.createText(this._el_16, ' Dashboard', null);
        this._text_18 = this.renderer.createText(this._el_12, '\n                ', null);
        this._text_19 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_20 = this.renderer.createElement(this._el_10, 'li', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'active');
        this._text_21 = this.renderer.createText(this._el_20, '\n                    ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'i', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'fa fa-fw fa-bar-chart-o');
        this._text_23 = this.renderer.createText(this._el_20, ' High Chart\n                ', null);
        this._text_24 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_25 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_26 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_28 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'row');
        this._text_29 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'div', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'col-xl-6');
        this._text_31 = this.renderer.createText(this._el_30, '\n            ', null);
        this._el_32 = this.renderer.createElement(this._el_30, 'div', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'card card-block');
        this._text_33 = this.renderer.createText(this._el_32, '\n                ', null);
        this._el_34 = this.renderer.createElement(this._el_32, 'div', null);
        this.renderer.setElementAttribute(this._el_34, 'id', 'container');
        this.renderer.setElementAttribute(this._el_34, 'style', 'min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto');
        this._text_35 = this.renderer.createText(this._el_32, '\n            ', null);
        this._text_36 = this.renderer.createText(this._el_30, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_38 = this.renderer.createElement(this._el_28, 'div', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'col-xl-6');
        this._text_39 = this.renderer.createText(this._el_38, '\n            ', null);
        this._el_40 = this.renderer.createElement(this._el_38, 'div', null);
        this.renderer.setElementAttribute(this._el_40, 'class', 'card card-block');
        this._text_41 = this.renderer.createText(this._el_40, '\n                ', null);
        this._el_42 = this.renderer.createElement(this._el_40, 'div', null);
        this.renderer.setElementAttribute(this._el_42, 'id', 'area-chart');
        this.renderer.setElementAttribute(this._el_42, 'style', 'min-width: 310px; height: 400px; margin: 0 auto');
        this._text_43 = this.renderer.createText(this._el_40, '\n            ', null);
        this._text_44 = this.renderer.createText(this._el_38, '\n        ', null);
        this._text_45 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_46 = this.renderer.createElement(this._el_28, 'h1', null);
        this._text_47 = this.renderer.createText(this._el_46, ' ', null);
        this._text_48 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_49 = this.renderer.createElement(this._el_28, 'div', null);
        this.renderer.setElementAttribute(this._el_49, 'class', 'col-xl-6');
        this._text_50 = this.renderer.createText(this._el_49, '\n            ', null);
        this._el_51 = this.renderer.createElement(this._el_49, 'div', null);
        this.renderer.setElementAttribute(this._el_51, 'class', 'card card-block');
        this._text_52 = this.renderer.createText(this._el_51, '\n                ', null);
        this._el_53 = this.renderer.createElement(this._el_51, 'div', null);
        this.renderer.setElementAttribute(this._el_53, 'id', 'total-fruit');
        this.renderer.setElementAttribute(this._el_53, 'style', 'min-width: 310px; height: 400px; margin: 0 auto');
        this._text_54 = this.renderer.createText(this._el_51, '\n            ', null);
        this._text_55 = this.renderer.createText(this._el_49, '\n        ', null);
        this._text_56 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_57 = this.renderer.createElement(this._el_28, 'div', null);
        this.renderer.setElementAttribute(this._el_57, 'class', 'col-xl-6');
        this._text_58 = this.renderer.createText(this._el_57, '\n            ', null);
        this._el_59 = this.renderer.createElement(this._el_57, 'div', null);
        this.renderer.setElementAttribute(this._el_59, 'class', 'card card-block');
        this._text_60 = this.renderer.createText(this._el_59, '\n                ', null);
        this._el_61 = this.renderer.createElement(this._el_59, 'div', null);
        this.renderer.setElementAttribute(this._el_61, 'id', 'snow-depth');
        this.renderer.setElementAttribute(this._el_61, 'style', 'min-width: 310px; height: 400px; margin: 0 auto');
        this._text_62 = this.renderer.createText(this._el_59, '\n            ', null);
        this._text_63 = this.renderer.createText(this._el_57, '\n        ', null);
        this._text_64 = this.renderer.createText(this._el_28, '\n    ', null);
        this._text_65 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_16, 'click', this.eventHandler(this._handle_click_16_0.bind(this)));
        this._arr_0 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._expr_2 = import7.UNINITIALIZED;
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._text_65
        ], [disposable_0], []);
        return null;
    };
    _View_ChartComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLinkWithHref_16_3.context;
        }
        return notFoundResult;
    };
    _View_ChartComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this._arr_0('/dashboard', '/home');
        this._RouterLinkWithHref_16_3.check_routerLink(currVal_1, throwOnChange, false);
        this._RouterLinkWithHref_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this._RouterLinkWithHref_16_3.context.href;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_16, 'href', this.viewUtils.sanitizer.sanitize(import15.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ChartComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_16_3.context.ngOnDestroy();
    };
    _View_ChartComponent0.prototype._handle_click_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_16_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_ChartComponent0;
}(import1.AppView));
export function viewFactory_ChartComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ChartComponent === null)) {
        (renderType_ChartComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ChartComponent, {}));
    }
    return new _View_ChartComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=charts.ngfactory.js.map