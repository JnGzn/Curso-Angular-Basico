import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noGarzon(control: FormControl):{ [s:string]: boolean} {
    if(control.value?.toLowerCase() === "garzon"){
      return {
        noHerrera: control.value.toLowerCase() === "garzon"
      }
    }
    return null;
  }

}
