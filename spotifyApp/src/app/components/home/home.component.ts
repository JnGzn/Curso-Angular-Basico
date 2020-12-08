import { Observable } from 'rxjs';
import { SpotifyService } from './../../services/spotify.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  constructor(private spotify: SpotifyService) {

    // this.spotify.getNewRelases().subscribe(data => {
    //   console.log(data.albums.items);
    //   this.nuevasCanciones = data.albums.items;
    // });

   }
  ngOnInit(): void {
  }

}
