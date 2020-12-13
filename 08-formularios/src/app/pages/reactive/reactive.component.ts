import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup

  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
    this.cargarDataFormualario();
   }

  ngOnInit(): void {
  }



  guardar(){
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control => {

        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control2 => control2.markAsTouched())
        }else {
          control.markAsTouched();
        }
      })
      ;
    }
    console.log(this.form);
    this.form.reset({
      nombre: 'Sin nombre'
    });

  }
  crearFormulario(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-.]+\.[a-z]{2,3}$')]],
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      })
    })
  }

  cargarDataFormualario(){
    this.form.setValue({
      nombre: "Juan G",
      apellido: "Garzon",
      correo: "jngzn@hotmail.com",
      direccion: {
        distrito: "Cundinamarca",
        ciudad: "Bogota"
      }
    })

    this.form.reset({
      nombre: "Juan G",
      apellido: "Garzon",
      correo: "jngzn@hotmail.com"
    })
  }


  //#region geters
  get nombreNoValido(): boolean{
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get correoNoValido(): boolean{
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }

  get apellidoNoValido(): boolean{
    return this.form.get('apellido').invalid && this.form.get('apellido').touched;
  }

  get distritoNoValido(): boolean{
    return this.form.get('direccion.distrito').invalid && this.form.get('direccion.distrito').touched;
  }

  get ciudadNoValido(): boolean{
    return this.form.get('direccion.ciudad').invalid && this.form.get('direccion.ciudad').touched;
  }

  //#endregion
}
