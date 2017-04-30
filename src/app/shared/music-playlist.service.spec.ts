/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicPlaylistService } from './music-playlist.service';

describe('MusicPlaylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicPlaylistService]
    });
  });

  it('should ...', inject([MusicPlaylistService], (service: MusicPlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
