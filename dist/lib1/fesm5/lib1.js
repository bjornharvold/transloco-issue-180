import { Component, NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [Lib1Component],
                    imports: [
                        TranslocoModule
                    ],
                    exports: [Lib1Component],
                    providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'lib1' }]
                },] }
    ];
    return Lib1Module;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib1.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Lib1Component, Lib1Module };
//# sourceMappingURL=lib1.js.map
