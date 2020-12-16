import { ValidadoresService } from './../../services/validadores.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup

  constructor( private fb: FormBuilder,
              private validadores: ValidadoresService ) {
    this.crearFormulario();
    this.cargarDataFormualario();
    this.crearListeners();
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
      apellido: ['', [Validators.required, this.validadores.noGarzon]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-.]+\.[a-z]{2,3}$')]],
      usuario: ['', , this.validadores.existeUsuario],
      pass1: ['abc', Validators.required],
      pass2: ['abcd', Validators.required],
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      pasatiempos: this.fb.array([

      ])
    }, {
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    })
  }

  crearListeners(){
    // this.form.valueChanges.subscribe(valor => {
    //   console.log(valor);

    // })
    // this.form.statusChanges.subscribe(valor => {
    //   console.log(valor);
    // })
    // this.form.get('usuario').statusChanges.subscribe(valor => {
    //   console.log(valor);
    // })
    this.form.get('usuario').valueChanges.subscribe(valor => {
      console.log(valor);
    })
  }

  agregarElemento(){
    this.pasatiempos.push(this.fb.control(''))
  }

  eliminarPasatiempo(idx: number){
    this.pasatiempos.removeAt(idx);
  }

  cargarDataFormualario(){
    // this.form.setValue({
    //   nombre: "Juan G",
    //   apellido: "Garzon",
    //   correo: "jngzn@hotmail.com",
    //   direccion: {
    //     distrito: "Cundinamarca",
    //     ciudad: "Bogota"
    //   }
    // })

    this.form.reset({
      nombre: "Juan G",
      apellido: "Garzon T",
      correo: "jngzn@hotmail.com",
        direccion: {
          distrito: "Cundinamarca",
          ciudad: "Bogota"
        }

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

  get pasatiempos(): FormArray{
    return this.form.get('pasatiempos') as FormArray;
  }

  get pass1NoValido(): boolean{
    return this.form.get('pass1').invalid && this.form.get('pass1').touched;
  }

  get usuarioNoValido(): boolean{
    return this.form.get('usuario').invalid && this.form.get('usuario').touched;
  }

  get pass2NoValido(): boolean{
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;

    return !(pass1 === pass2);
  }

  //#endregion
}
