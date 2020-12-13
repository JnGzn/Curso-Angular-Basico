import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyCxbrPC8w_cV-IQS3GYllcX5nrfjtp32FU';
  private userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  crearUsuario(user: Usuario){
    const data = {
      ...user,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signUp?key=${this.apiKey}`, data).pipe(
      map(res => {
        this.guardarToken(res['idToken'])
        return res;
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
  }

  login(user: Usuario){
    const data = {
      ...user,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, data).pipe(
      map(res => {
        this.guardarToken(res['idToken'])
        return res;
      })
    );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken)

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(): string {
    const token = localStorage.getItem('token');
    if(token){
      this.userToken = token
    }else{
      this.userToken = null;
    }
    return this.userToken;
  }

  estaAutenticado(){
    if(!this.userToken){
      return
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date()
    expiraDate.setTime(expira);


    return expiraDate >= new Date();
  }
}
