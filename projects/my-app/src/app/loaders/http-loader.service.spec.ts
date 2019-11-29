import { TestBed } from '@angular/core/testing';

import { HttpLoader } from './http-loader.service';

describe('HttpLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpLoader = TestBed.get(HttpLoader);
    expect(service).toBeTruthy();
  });
});
