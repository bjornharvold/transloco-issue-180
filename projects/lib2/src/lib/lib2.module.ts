import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';

@NgModule({
  declarations: [Lib2Component],
  imports: [
    TranslocoModule
  ],
  exports: [Lib2Component],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'lib2'}]
})
export class Lib2Module { }
