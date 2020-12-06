import { HeroesService } from './../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroesEncontrados: Heroe[];
  criterioBusqueda: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params =>{
        this.criterioBusqueda = params['nombre'];
        this.heroesEncontrados = heroesService.buscarHeroes(params['nombre']);
        console.log(this.heroesEncontrados);
      });
  }

  ngOnInit(

  ): void {

  }

}
