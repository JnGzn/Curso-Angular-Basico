import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQBlffH5fk0iIiYHOx0YOfhNBDi1Ak0Jq_4ma72Ihpi9o-ZPxAOT5xCzSGzE6tEoQy3boXO3FkkbccfR7d4';
  header = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });

  getQuery(query): Observable<any>{
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, {headers: this.header});
  }

  constructor(private http: HttpClient) {

  }

  getNewRelases(): Observable<any>{

    return this.getQuery('browse/new-releases').pipe(
      map(data =>  data['albums'].items )
    );
  }

  getArtistasByName(name: string): Observable<any>{
    return this.getQuery(`search?q=${name}&type=artist&limit=10`).pipe(
      map( data =>  data['artists'].items )
    );
  }

  getArtistaById(id): Observable<any>{
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<any>{
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map( data => data['tracks'])
    )
  }
}
