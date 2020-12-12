import { ListaItem } from './../../models/lista-item';
import { DesdeosService } from 'src/app/services/desdeos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;

  nombreItem: string;
  constructor(private deseosService :DesdeosService,
              private activatedRoute: ActivatedRoute) {
      const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
      this.lista = this.deseosService.cargarLista(listaId);
      console.log(this.lista);
      
   }

  ngOnInit() {
  }

  agregarItem(){
    if(!this.lista){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem)
    this.lista.items.push(nuevoItem);

    this.nombreItem = "";
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem){
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

    if(pendientes == 0){
      this.lista.terminada = true;
      this.lista.finalizadaEn = new Date();
    }else {
      this.lista.terminada = false;
      this.lista.finalizadaEn = null;
    }

    this.deseosService.guardarStorage();
  }

  borrar(idx: number){
    this.lista.items.splice(idx,1);
    this.deseosService.guardarStorage();
  }

  
}
