import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  burcarArtista(value: string): void{
    if (!value){
      this.artistas = [];
      return;
    }
    this.spotify.getArtistaByName(value).subscribe(data => {
      console.log(data.artists.items);
      this.artistas = data.artists.items
    })
  }

}
