import { FileItem } from './../interfaces/file-item';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize  } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';
  constructor(private db: AngularFirestore, private storage: AngularFireStorage ) {
  }
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  cargarImagenesFireBase(imagenes: FileItem[]){
    const storageRef = this.storage.storage.ref();

    for (const item of imagenes) {
      const fileRef = this.storage.ref(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`);
      item.isSubiendo = true;
      if (item.progreso >= 100){
        continue;
      }

      const task = this.storage.upload(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`, item.archivo);

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(res => {
           item.url = res;
           item.isSubiendo = false;
           this.guardarImgen({
             nombre: item.nombreArchivo,
             url: item.url
           });
          });
        })
      ).subscribe();


      task.percentageChanges().subscribe(res => {
        // console.log(res);
        item.progreso = res;
      }, err => console.log() );



    }

  }

  private guardarImgen(imagen: {nombre: string, url: string}): void {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }

}
