import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  obtenerPaises(){
    return this.http.get('http://restcountries.eu/rest/v2/lang/es').pipe(
      map((data: any[]) => {
        return data.map( pais => {
          return {
            nombre: pais.name,
            codigo: pais.alpha3Code
          }
        })
      })
    )
  }
}
