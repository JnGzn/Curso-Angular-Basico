import { AutenticacionService } from './../../services/autenticacion.service';
import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  recordarme = false;
  usuario: Usuario
  constructor(private auth: AutenticacionService,
    private router: Router) { }

  ngOnInit() {
    this.usuario = new Usuario();
    // this.usuario.correo = 'jngzn@hotmail.com'
    // this.usuario.nombre = ''
   }

   onSubmit(form: NgForm){
     if(form.invalid){
       return;
     }

     if(this.recordarme){
      localStorage.setItem('email', this.usuario.email);
    }

     Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Creando Usuario...',
    });
    Swal.showLoading();

    this.auth.crearUsuario(this.usuario).subscribe(repuesta => {
      console.log(repuesta);
      this.router.navigateByUrl('/home');
      Swal.close();
    }, (err)=> {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al crear usuario',
        text: err.error.error.message,
      });
    })


   }

}
