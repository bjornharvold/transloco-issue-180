import { Component, NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [Lib2Component],
                    imports: [
                        TranslocoModule
                    ],
                    exports: [Lib2Component],
                    providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'lib2' }]
                },] }
    ];
    return Lib2Module;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Lib2Component, Lib2Module };
//# sourceMappingURL=lib2.js.map
