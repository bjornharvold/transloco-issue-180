import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';
import {Lib1Module} from 'lib1';
import {Module1Component} from './module1.component';
import {Module1RoutingModule} from './module1-routing.module';

@NgModule({
  declarations: [Module1Component],
  imports: [
    CommonModule,
    TranslocoModule,
    Module1RoutingModule,
    Lib1Module
  ],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'module1'}]
})
export class Module1Module { }
