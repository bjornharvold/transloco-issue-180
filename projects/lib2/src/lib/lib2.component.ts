import { Component, OnInit } from '@angular/core';

@Component({
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
  `,
  styles: []
})
export class Lib2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
