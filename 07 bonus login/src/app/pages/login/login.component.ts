import { AutenticacionService } from './../../services/autenticacion.service';
import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  recordarme: boolean;

  constructor(private auth: AutenticacionService,
              private router: Router) { }

  ngOnInit() {
    const email = localStorage.getItem('email');
    this.usuario.email = email;
    this.recordarme = true;
  }

  envioForm(formulario: NgForm) {

    if(formulario.invalid){
      return
    }

    if(this.recordarme){
      localStorage.setItem('email', this.usuario.email);
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Autenticando...',
    });
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(repuesta => {
      console.log(repuesta);
      this.router.navigateByUrl('/home');
      Swal.close();
    }, (err)=> {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message,
      });
    })


  }
}
