import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MusicPlaylistService {

  constructor(private http: Http) { }

  getPlaylist():Observable<any[]>{
    return this.http.get("http://starlord.hackerearth.com/sureify/cokestudio").map(res => res.json());
  }

}
