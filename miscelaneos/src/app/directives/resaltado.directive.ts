import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {

  }
  @Input('appResaltado')
  nuevoColor: string = "yellow";

  @HostListener('mouseenter') muoseEntro(){
    this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  @HostListener('mouseleave') muoseSalio(){
    this.el.nativeElement.style.backgroundColor = null;
  }

}
