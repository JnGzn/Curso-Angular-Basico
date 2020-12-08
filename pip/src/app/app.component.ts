import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Herculito';
  array = [1, 2, 3, 4, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 12345.5;
  date = new Date();

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resuelta');
    }, 5000);
  });

  json = {
    a: 123,
    b: 'abcd',
    c: {
      x: 'xyz'
    }
  };
}
