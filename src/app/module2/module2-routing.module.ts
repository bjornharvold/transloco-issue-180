import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Module2Component} from './module2.component';

const routes: Routes = [
  {
    path: 'comp',
    component: Module2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule {
}
