
import { SpotifyService } from './../../services/spotify.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  error: string;
  nuevasCanciones: any[] = [];
  loading = false;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewRelases().subscribe(data => {

        this.nuevasCanciones = data;
        this.loading = false;
      }, err => {
        console.log(err);
        this.error = err.error.error.message;
        this.loading = false;
      });

   }
  ngOnInit(): void {
  }

}
