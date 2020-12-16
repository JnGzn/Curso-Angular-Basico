import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/interfaces/heroe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  loading = false;

  constructor(private heroesService: HeroesService) {

   }

  ngOnInit(): void {
    this.loading = true;
    this.heroesService.obtenerHeroes().subscribe(data=> {
      this.loading = false;
      this.heroes = data;
    });
  }

  eliminarHeroe(id: string, idx: number): void{
    Swal.fire({
      title: 'Esta Seguro?',
      text: 'Esta seguro de borrar este registro?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value){
        this.loading = true;
        this.heroesService.eliminarHeroe(id).subscribe(res => {
          this.loading = false;
          this.heroes.splice(idx, 1);
        });
      }
    });
  }
}
