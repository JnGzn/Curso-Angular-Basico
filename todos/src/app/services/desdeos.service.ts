import { Lista } from '../models/lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesdeosService {

  listas: Lista[] = [];
  constructor() { 
  
    console.log(this.listas);
    this.cargarStorage();
  }

  crearLista(titulo: string): number{
    const nevaLista = new Lista(titulo);   
    this.listas.push(nevaLista);
    this.guardarStorage();
    return nevaLista.id;
  }

  cargarLista(id: number | string): Lista{
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id)
  }

  borrarLista(lista: Lista){
    this.listas = this.listas.filter(datalista => datalista.id != lista.id);
    this.guardarStorage();
  }


  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    var data = localStorage.getItem('data')
    if(data){
      this.listas = JSON.parse(data);
    }
  }


}
