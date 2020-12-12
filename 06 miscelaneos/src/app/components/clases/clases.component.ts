import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {
  alerta = 'alert-danger';
  loading = false;

  propiedades = {
    danger: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  ejectutar(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
