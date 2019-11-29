import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TranslocoConfig, TranslocoModule} from '@ngneat/transloco';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {HttpLoader} from './loaders/http-loader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: [{ id: 'en', label: 'English' }],
        reRenderOnLangChange: false,
        defaultLang: 'en',
        fallbackLang: 'en',
        prodMode: environment.production,
        scopeStrategy: 'shared',
        scopeMapping: {
          module1: 'MODULE1',
          module2: 'MODULE2',
          lib1: 'LIB1',
          lib2: 'LIB2'
        }
      } as TranslocoConfig
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: HttpLoader
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
