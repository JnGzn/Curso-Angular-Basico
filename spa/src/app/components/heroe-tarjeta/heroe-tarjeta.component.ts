import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  @Input()
  heroe: Heroe;

  @Input()
  index: number;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  ngOnInit(): void {
  }
  verHeroe(): void{
    this.heroeSeleccionado.emit(this.index);
  }
}
