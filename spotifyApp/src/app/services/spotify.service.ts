import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQAIkLlkmgNVJ76A6ksmSAos8vlKldxGNAppvVMVdCvnZn_HOP8wBMHfalXdyMF7bc25XVER8SAHYMmOdww';
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

  getArtistaByName(name: string): Observable<any>{
    return this.getQuery(`search?q=${name}&type=artist`).pipe(
      map( data =>  data['artists'].items )
    );
  }
}
