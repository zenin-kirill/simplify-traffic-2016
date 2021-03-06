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
import * as import0 from '../../../../../app/pages/blank-page/components/blank_page';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export var Wrapper_BlankPageComponent = (function () {
    function Wrapper_BlankPageComponent() {
        this.changed = false;
        this.context = new import0.BlankPageComponent();
    }
    Wrapper_BlankPageComponent.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_BlankPageComponent;
}());
var renderType_BlankPageComponent_Host = null;
var _View_BlankPageComponent_Host0 = (function (_super) {
    __extends(_View_BlankPageComponent_Host0, _super);
    function _View_BlankPageComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BlankPageComponent_Host0, renderType_BlankPageComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BlankPageComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('blank-page', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BlankPageComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BlankPageComponent_0_4 = new Wrapper_BlankPageComponent();
        this._appEl_0.initComponent(this._BlankPageComponent_0_4.context, [], compView_0);
        compView_0.create(this._BlankPageComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BlankPageComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BlankPageComponent) && (0 === requestNodeIndex))) {
            return this._BlankPageComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_BlankPageComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BlankPageComponent_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BlankPageComponent_Host0;
}(import1.AppView));
function viewFactory_BlankPageComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BlankPageComponent_Host === null)) {
        (renderType_BlankPageComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_BlankPageComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var BlankPageComponentNgFactory = new import9.ComponentFactory('blank-page', viewFactory_BlankPageComponent_Host0, import0.BlankPageComponent);
var styles_BlankPageComponent = [];
var renderType_BlankPageComponent = null;
var _View_BlankPageComponent0 = (function (_super) {
    __extends(_View_BlankPageComponent0, _super);
    function _View_BlankPageComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BlankPageComponent0, renderType_BlankPageComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BlankPageComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this.init([], [], [], []);
        return null;
    };
    return _View_BlankPageComponent0;
}(import1.AppView));
export function viewFactory_BlankPageComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BlankPageComponent === null)) {
        (renderType_BlankPageComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_BlankPageComponent, {}));
    }
    return new _View_BlankPageComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=blank_page.ngfactory.js.map