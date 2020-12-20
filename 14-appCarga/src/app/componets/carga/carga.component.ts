import { CargaImagenesService } from './../../services/carga-imagenes.service';
import { FileItem } from './../../interfaces/file-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  isSobreDrop = false;
  archivos: FileItem[] = [];

  constructor(public cargaImagenesService: CargaImagenesService) { }

  ngOnInit(): void {
  }

  cargarImages(): void{
    this.cargaImagenesService.cargarImagenesFireBase(this.archivos);
  }
}
