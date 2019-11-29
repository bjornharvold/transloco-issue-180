import { Component, OnInit } from '@angular/core';

@Component({
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
  `,
  styles: []
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
