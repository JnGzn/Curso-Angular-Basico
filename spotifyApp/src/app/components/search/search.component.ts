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

  borrarResultados():void{

  }

  burcarArtista(value: string): void{
    console.log(value);

    if (!value){
      this.artistas = [];
      return;
    }
    this.loading = true;
    this.artistas = [];
    this.spotify.getArtistasByName(value).subscribe(data => {
      console.log(data);

      for (const iterator of data['artists'].items) {
        this.artistas.push(iterator)
      }
      for (const iterator of data['tracks'].items) {
        this.artistas.push(iterator)
      }

      // this.artistas = data;
      this.loading = false;
    }, err => {
      console.log(err);
      this.error = err.error.error.message;
      this.loading = false;
    });
  }

}
