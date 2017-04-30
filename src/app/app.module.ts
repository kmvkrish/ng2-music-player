import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MusicPlaylistComponent } from './music-playlist/music-playlist.component';
import {MusicPlaylistService } from './shared/music-playlist.service';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicPlayerService } from './shared/music-player.service';
import { MusicProgressComponent } from './music-progress/music-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicPlaylistComponent,
    MusicPlayerComponent,
    MusicProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MusicPlaylistService,
    MusicPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
