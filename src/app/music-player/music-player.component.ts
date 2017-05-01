import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MusicPlayerService } from '../shared/music-player.service';

@Component({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  
  @Input() currentSong;
  @Input() paused;

  @Input() currentTime;
  @Input() totalTime;

  constructor(private musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
    
  }

  playpause():void{
    if(this.musicPlayerService.audio.paused){
      this.musicPlayerService.audio.play();
      this.paused = false;
    }else{
      this.musicPlayerService.audio.pause();
      this.paused = true;
    }
  }

}
