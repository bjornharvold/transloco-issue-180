import { Component, NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lib1.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Lib1Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Lib1Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-lib1',
                template: `
    <p>
      {{ 'LIB1.WORKS' | transloco }}
    </p>
    <ng-container *transloco="let t">
    <p>
      {{ t('lib1.WORKS') }}
    </p>
    <p>
      {{ t('LIB1.WORKS') }}
    </p>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
Lib1Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lib1.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Lib1Module {
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
