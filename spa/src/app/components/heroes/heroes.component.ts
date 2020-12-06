import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  constructor( private heroesService: HeroesService,
               private router: Router ) {

   }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(index: number): void{
    this.router.navigate(['/heroe', index]);
  }

  // heroes =
}
