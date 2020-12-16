// import { HeroesService } from './heroes.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../interfaces/heroe';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://loggin-app-c6fbb-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) { }

  crearHeroes(heroe: HeroeModel): Observable<HeroeModel>{
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map( res => {
        heroe.id = res['name'];
        return heroe;
      })
    );
  }

  actualizarHeroe(heroe: HeroeModel): Observable<any>{
    const heroeTemp = { ...heroe };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  obtenerHeroes(): Observable<HeroeModel[]>{
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map(res => this.crearArregloHeroe(res))
    );
  }

  eliminarHeroe(id: string): Observable<any> {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  obtenerHeroe(id: string): Observable<any> {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }
  private crearArregloHeroe(heroesObj: object): HeroeModel[]{
    const heroes: HeroeModel[] = [];
    if (!heroesObj) {
      return heroes;
    }

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }
}
