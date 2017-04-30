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

  currentSong:any;
  paused: boolean;

  totalTime;
  currentTime;

  constructor(private musicPlaylistService: MusicPlaylistService,
  private musicPlayerService: MusicPlayerService){

  }

  ngOnInit():void{
    this.musicPlaylistService.getPlaylist().subscribe(songs => this.songs = songs);
  }

  playEvent(song):void{
    this.currentSong = song;
    this.paused = false;
    this.musicPlayerService.play(song.url);
    this.backgroundStyle = this.composeBackgroundStyle(song.cover_image);

  }

  composeBackgroundStyle(image){
    return {
      backgroundSize:'cover',
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ), url(${this.currentSong.cover_image})`
    };
  }

}
