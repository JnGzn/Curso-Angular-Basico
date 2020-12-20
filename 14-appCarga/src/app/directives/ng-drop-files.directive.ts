import { FileItem } from './../interfaces/file-item';
import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  archivo: FileItem;

  @Input()
  archivos: FileItem[] = [];

  @Output()
  mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  onDragEnter(event: any){
    this.mouseSobre.emit(true);
    this.prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: any){
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any){
    const transferencia = this.getTranferencia(event);
    if (!transferencia){
      return;
    }
    this.extraerArchivos(transferencia.files);
    this.prevenirDetener(event);
    this.mouseSobre.emit(false);

  }

  private getTranferencia( event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private extraerArchivos( archivosLista: FileList) {
    // console.log(archivosLista);
    // tslint:disable-next-line: forin
    for (const key in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemporal = archivosLista[key];
      // console.log(this.isRecargable(archivoTemporal));

      if (this.isRecargable(archivoTemporal)){
        const archivoNuevo = {
          archivo: archivoTemporal,
          nombreArchivo: archivoTemporal.name
        };
        this.archivos.push(archivoNuevo);
      }

    }
    console.log(this.archivos);

  }

  private prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private isRecargable(archivo: File): boolean {
    return (!this.archivoDropeado(archivo.name) && this.esImagen(archivo.type));
  }

  private archivoDropeado( nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo){
        return true;
      }
    }
    return false;
  }

  private esImagen(tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }
}
