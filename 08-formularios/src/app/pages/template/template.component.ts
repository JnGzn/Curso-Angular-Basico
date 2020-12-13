import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    // nombre: 'Juan G'
     nombre: 'Juan G',
     correo: 'jngzn@hotmail.com',
     apellido: 'Garzon',
     pais: 'COL',
     genero: 'M'
  }
  paises: any[];
  constructor(private pais: PaisesService) { }

  ngOnInit(): void {
    this.pais.obtenerPaises().subscribe(paises => {
      this.paises = paises;
      this.paises.unshift({nombre:'Selecciona', codigo: ''})
    })
  }
  guardar(form: NgForm){

    if(form.invalid){
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();

      })
      return;
    }
    console.log('submit');
    console.log(form);
    console.log(form.value);

  }
}
