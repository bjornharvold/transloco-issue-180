import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslocoLoader} from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class HttpLoader implements TranslocoLoader {

  getTranslation(langPath: string) {
    return this.http.get(`/assets/i18n/${langPath}.json`);
  }

  constructor(private http: HttpClient) {}
}
