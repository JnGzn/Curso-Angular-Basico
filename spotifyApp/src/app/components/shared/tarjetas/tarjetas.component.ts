import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(private router: Router) { }
  @Input()
  items: any[] = [];
  ngOnInit(): void {
  }
  verArtista(item: any): void{
    console.log(item);
    let idArtista = '';
    if (item.type === 'artist'){
      idArtista = item.id;
    }else {
      idArtista = item.artists[0].id;
    }
    console.log(idArtista);
    this.router.navigate(['/artist', idArtista])
  }
}
