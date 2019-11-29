(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngneat/transloco')) :
    typeof define === 'function' && define.amd ? define('lib1', ['exports', '@angular/core', '@ngneat/transloco'], factory) :
    (global = global || self, factory(global.lib1 = {}, global.ng.core, global.transloco));
}(this, (function (exports, core, transloco) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lib1.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Lib1Component = /** @class */ (function () {
        function Lib1Component() {
        }
        /**
         * @return {?}
         */
        Lib1Component.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        Lib1Component.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-lib1',
                        template: "\n    <p>\n      {{ 'LIB1.WORKS' | transloco }}\n    </p>\n    <ng-container *transloco=\"let t\">\n    <p>\n      {{ t('lib1.WORKS') }}\n    </p>\n    <p>\n      {{ t('LIB1.WORKS') }}\n    </p>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        Lib1Component.ctorParameters = function () { return []; };
        return Lib1Component;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/lib1.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Lib1Module = /** @class */ (function () {
        function Lib1Module() {
        }
        Lib1Module.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [Lib1Component],
                        imports: [
                            transloco.TranslocoModule
                        ],
                        exports: [Lib1Component],
                        providers: [{ provide: transloco.TRANSLOCO_SCOPE, useValue: 'lib1' }]
                    },] }
        ];
        return Lib1Module;
    }());

    exports.Lib1Component = Lib1Component;
    exports.Lib1Module = Lib1Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib1.umd.js.map
