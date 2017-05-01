import { Component, OnInit } from '@angular/core';

import { MusicPlaylistService } from './shared/music-playlist.service';
import { MusicPlayerService } from './shared/music-player.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  backgroundStyle;
  songs: any[];

  currentSong: any;
  paused: boolean;

  currentSongIndex:number = 0;

  totalTime;
  currentTime;

  constructor(private musicPlaylistService: MusicPlaylistService,
    private musicPlayerService: MusicPlayerService) {

  }

  ngOnInit(): void {
    this.musicPlaylistService.getPlaylist().subscribe(songs => this.songs = songs);

    this.musicPlayerService.audio.onended = this.handleEnded.bind(this);
    this.musicPlayerService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);

  }

  playEvent(song): void {
    this.currentSong = song;
    this.paused = false;
    this.musicPlayerService.play(song.url);
    this.backgroundStyle = this.composeBackgroundStyle(song.cover_image);
    this.currentSongIndex = this.songs.indexOf(song);
  }

  composeBackgroundStyle(image) {
    return {
      backgroundSize: 'cover',
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ), url(${this.currentSong.cover_image})`
    };
  }

  handleEnded(e): void {
    this.musicPlayerService.audio.pause();
    this.musicPlayerService.audio.currentTime = 0;
    this.currentTime = 0;

    if(this.currentSongIndex < (this.songs.length - 1)){
      this.currentSongIndex++;
    }else{
      this.currentSongIndex = 0;
    }

    this.playEvent(this.songs[this.currentSongIndex]);
  }

  handleTimeUpdate(e): void {
    const currentTime = this.musicPlayerService.audio.currentTime;
    const totalTime = this.musicPlayerService.audio.duration;

    if (currentTime) {
      this.currentTime = currentTime;
    }
    if (totalTime) {
      this.totalTime = totalTime;
    }

  }

}
