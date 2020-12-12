import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista: any;
  topTracks: any[];
  loading = false;
  error: string;
  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id'])

    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string): void{
    this.loading = true;
    this.spotify.getArtistaById(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    }, err => {
      console.log(err);
      this.error = err.error.error.message;
      this.loading = false;
    });
  }

  getTopTracks(id: string): void{
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    }, err => {
      console.log(err);
      this.error = err.error.error.message;
      this.loading = false;
    });
  }

}
