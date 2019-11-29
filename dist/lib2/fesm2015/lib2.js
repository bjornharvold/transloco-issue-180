import { Component, NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lib2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Lib2Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Lib2Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-lib2',
                template: `
    <p>
      {{ 'LIB2.WORKS' | transloco }}
    </p>
    <ng-container *transloco="let t">
      <p>
        {{ t('lib2.WORKS') }}
      </p>
      <p>
        {{ t('LIB2.WORKS') }}
      </p>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
Lib2Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lib2.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Lib2Module {
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
