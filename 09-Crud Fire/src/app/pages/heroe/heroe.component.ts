import { Observable } from 'rxjs';
import { HeroesService } from './../../services/heroes.service';
import { HeroeModel } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class  HeroeComponent implements OnInit {
  heroeModel = new HeroeModel();
  constructor(private heroeService: HeroesService,
              private activatedRote: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRote.snapshot.paramMap.get('id');
    if (id !== 'nuevo'){
      this.heroeService.obtenerHeroe(id).subscribe(res => {
        this.heroeModel = res;
        this.heroeModel.id = id;

      });
    }
  }

  guardar(form: NgForm): void{
    if (form.invalid){
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<HeroeModel>;
    if (this.heroeModel.id){
      peticion = this.heroeService.actualizarHeroe(this.heroeModel);
    }else{
      peticion = this.heroeService.crearHeroes(this.heroeModel);
    }

    peticion.subscribe(heroe => {
      this.heroeModel = heroe;
      Swal.fire({
        title: heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    }, err => {
      Swal.fire({
        title: 'Se ha producion un error',
        text: err.error.error.message,
        icon: 'error'
      });
    });
  }



}
