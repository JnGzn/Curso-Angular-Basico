import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pwd'
})
export class PwdPipe implements PipeTransform {

  transform(value: string, acivar: boolean): string {
    if (!acivar){
    return value;
    }
    let pwd = '';
    for (const key of value) {
      pwd += '*';
    }
    return pwd;
  }

}
