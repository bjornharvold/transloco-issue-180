(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngneat/transloco')) :
    typeof define === 'function' && define.amd ? define('lib2', ['exports', '@angular/core', '@ngneat/transloco'], factory) :
    (global = global || self, factory(global.lib2 = {}, global.ng.core, global.transloco));
}(this, (function (exports, core, transloco) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lib2.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Lib2Component = /** @class */ (function () {
        function Lib2Component() {
        }
        /**
         * @return {?}
         */
        Lib2Component.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        Lib2Component.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-lib2',
                        template: "\n    <p>\n      {{ 'LIB2.WORKS' | transloco }}\n    </p>\n    <ng-container *transloco=\"let t\">\n      <p>\n        {{ t('lib2.WORKS') }}\n      </p>\n      <p>\n        {{ t('LIB2.WORKS') }}\n      </p>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        Lib2Component.ctorParameters = function () { return []; };
        return Lib2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lib2.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Lib2Module = /** @class */ (function () {
        function Lib2Module() {
        }
        Lib2Module.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [Lib2Component],
                        imports: [
                            transloco.TranslocoModule
                        ],
                        exports: [Lib2Component],
                        providers: [{ provide: transloco.TRANSLOCO_SCOPE, useValue: 'lib2' }]
                    },] }
        ];
        return Lib2Module;
    }());

    exports.Lib2Component = Lib2Component;
    exports.Lib2Module = Lib2Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib2.umd.js.map
