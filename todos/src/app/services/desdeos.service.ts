import { Lista } from '../models/lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesdeosService {

  listas: Lista[] = [];
  constructor() { 
    const lista1 = new Lista('Recolectar desarrollos');    
    const lista2 = new Lista('Recolectar desarrollos 2');
    
    this.listas.push(lista1, lista2)
    console.log(this.listas);
    
  }
}
