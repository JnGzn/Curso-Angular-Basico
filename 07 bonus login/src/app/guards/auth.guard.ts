import { AutenticacionService } from './../services/autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AutenticacionService,
              private route: Router){}
  canActivate(): boolean {
    console.log('Guard');
    const res = this.auth.estaAutenticado()
    if(!res){
      this.route.navigateByUrl('/login')
    }
    return res;
  }

}
