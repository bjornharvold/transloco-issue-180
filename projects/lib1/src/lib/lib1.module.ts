import { NgModule } from '@angular/core';
import { Lib1Component } from './lib1.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';

@NgModule({
  declarations: [Lib1Component],
  imports: [
    TranslocoModule
  ],
  exports: [Lib1Component],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'lib1'}]
})
export class Lib1Module { }
