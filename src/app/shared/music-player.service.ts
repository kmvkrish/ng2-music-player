import { Injectable } from '@angular/core';

@Injectable()
export class MusicPlayerService {

  audio;

  constructor() { 

    this.audio = new Audio();

  }

  play(song):void{
    this.audio.src = song;
    this.audio.currentTime = 0;
    this.audio.play();
  }

}
