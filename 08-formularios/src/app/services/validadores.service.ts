import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noGarzon(control: FormControl):ErrorValidate {
    if(control.value?.toLowerCase() === "garzon"){
      return {
        noHerrera: control.value.toLowerCase() === "garzon"
      }
    }
    return null;
  }

  passwordsIguales(pass1Name: string, pass2Name: string){
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.controls[pass1Name];
      const pass2 = formGroup.controls[pass2Name];

      if(pass1.value === pass2.value){
        pass2.setErrors(null);
      }else {
        pass2.setErrors({noEsIgual: true})
      }
    }
  }

  existeUsuario(control: FormControl):Promise<ErrorValidate> | Observable<ErrorValidate> {
    if(!control.value){
      return new Promise((resolve) => resolve(null))
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'me'){
          resolve({existe: true})
        }else{
          resolve(null)
        }
      }, 4000);
    })

  }

}
