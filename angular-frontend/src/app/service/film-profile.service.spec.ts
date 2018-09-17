import { TestBed } from '@angular/core/testing';

import { FilmProfileService } from './film-profile.service';

describe('FilmProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmProfileService = TestBed.get(FilmProfileService);
    expect(service).toBeTruthy();
  });
});
