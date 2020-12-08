import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDOtoyn0HFXB9EGAJH1oXQpVzZK4XNhDQJGuS0A2-lqHtBwCCCyOsDUlr6r0iN-qEv4ei2h5275tMWtp3Y';
  header = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });
  constructor(private http: HttpClient) {

  }

  getNewRelases(): Observable<any>{

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: this.header});
  }

  getArtistaByName(name: string): Observable<any>{
    return this.http.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`, {headers: this.header});
  }
}
