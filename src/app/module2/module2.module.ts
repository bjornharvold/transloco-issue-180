import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';
import {Lib2Module} from 'lib2';
import {Module2Component} from './module2.component';
import {Module2RoutingModule} from './module2-routing.module';

@NgModule({
  declarations: [Module2Component],
  imports: [
    CommonModule,
    TranslocoModule,
    Module2RoutingModule,
    Lib2Module
  ],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'module2'}]
})
export class Module2Module { }
