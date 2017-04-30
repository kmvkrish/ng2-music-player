import { Component, OnInit, Input } from '@angular/core';

import { MusicPlayerService } from '../shared/music-player.service';
@Component({
  selector: 'music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.css']
})
export class MusicProgressComponent implements OnInit {

  currentTime;
  totalTime;

  constructor(private musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
    this.musicPlayerService.audio.onended = this.handleEnded.bind(this);
    this.musicPlayerService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  handleEnded(e):void{ }

  handleTimeUpdate(e):void{
    const currentTime = this.musicPlayerService.audio.currentTime;
    const totalTime = this.musicPlayerService.audio.duration;

    if(currentTime){
      this.currentTime = currentTime;
    }
    if(totalTime){
      this.totalTime = totalTime;
    }

  }

  getTime(time){
    var seconds = Math.floor(time);
    var minutes = Math.floor(seconds / 60);

    if(minutes <= 9){
      if(seconds < 10){
        return "0" + minutes + ":" + "0" + seconds;
      }else{
        return "0" + minutes + ":" + seconds;
      }
    }else{
      if(seconds < 10){
        return minutes + ":" + "0" + seconds;
      }else{
        return minutes + ":" + seconds;
      }
    }
  }

}
