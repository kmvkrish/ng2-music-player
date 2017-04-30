import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MusicPlayerService } from '../shared/music-player.service';

@Component({
  selector: 'music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css']
})
export class MusicPlaylistComponent implements OnInit {

  @Input() songs: any[];

  @Output() playEvent:EventEmitter<any> = new EventEmitter();
  
  constructor(private musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
  }

  play(song):void{
    this.playEvent.emit(song);
  }

}
