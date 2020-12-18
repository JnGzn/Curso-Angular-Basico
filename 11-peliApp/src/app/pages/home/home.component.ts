import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private peliculasService: PeliculasService){

  }

  ngOnInit(): void {
    this.peliculasService.obtenercartelera().subscribe(data => {
      console.log(data);
      this.movies = data.results;
    });
  }

}
