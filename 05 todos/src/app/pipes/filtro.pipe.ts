import { Lista } from 'src/app/models/lista.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    
    return listas.filter(lista => lista.terminada === completada);
  }

}
