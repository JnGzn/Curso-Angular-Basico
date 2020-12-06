import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor( private activateRoute: ActivatedRoute,
               private hereoService: HeroesService) {

    this.activateRoute.params.subscribe(params => {
      this.heroe = this.hereoService.getHeroe(params["id"]);
    });
  }

  ngOnInit(): void {
  }


}
