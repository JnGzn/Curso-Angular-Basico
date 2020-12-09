import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  error: string;
  artistas: any[] = [];
  loading = false;
  constructor(private spotify: SpotifyService) {

   }

  ngOnInit(): void {
  }

  burcarArtista(value: string): void{
    if (!value){
      this.artistas = [];
      return;
    }
    this.loading = true;
    this.spotify.getArtistasByName(value).subscribe(data => {
      this.artistas = data;
      this.loading = false;
    }, err => {
      console.log(err);
      this.error = err.error.error.message;
      this.loading = false;
    });
  }

}
