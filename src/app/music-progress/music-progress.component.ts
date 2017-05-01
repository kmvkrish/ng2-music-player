import { Component, OnInit, Input } from '@angular/core';

import { MusicPlayerService } from '../shared/music-player.service';
@Component({
  selector: 'music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.css']
})
export class MusicProgressComponent implements OnInit {

  @Input() currentTime;
  @Input() totalTime;

  constructor(private musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
    
  }

  getTime(time){
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - (minutes*60));

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
