import { DesdeosService } from 'src/app/services/desdeos.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {


  @ViewChild(IonList)
  lista: IonList;


  @Input()
  terminada = true;

  constructor(public desdeosScervice:DesdeosService,
    private router: Router,
    private alertController: AlertController) {

    }

async agregarLista(){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Nueva Lista',
    inputs: [
      {
        name: 'title',
        type: 'text',
        placeholder: 'Nombre de la Lista'
      }
    ],
  // subHeader: 'Subtitle',
  // message: 'This is an alert message.',
    buttons: [
      {
        text: 'Cancelar', 
        role: 'cancel'
      }, 
      {
        text: 'Crear',
        handler: (data) =>{
          console.log(data);
          if(!data.title){
            return;
          }

          const listaId = this.desdeosScervice.crearLista(data.title);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          //crear la lista
        }
      }
    ]
  });

  alert.present();
// this.router.navigateByUrl('/tabs/tab1/agregar');
}

listaSeleccionada(lista: Lista){
  if(this.terminada){
    this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
  }else{
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }

}

borrarLista(lista: Lista){
  this.desdeosScervice.borrarLista(lista);
}

async editarLista(lista: Lista){
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Titulo',
    inputs: [
      {
        name: 'title',
        type: 'text',
        placeholder: 'Nombre de la Lista',
        value: lista.title
      }
    ],
  // subHeader: 'Subtitle',
  // message: 'This is an alert message.',
    buttons: [
      {
        text: 'Cancelar', 
        role: 'cancel'
      }, 
      {
        text: 'Guardar',
        handler: (data) =>{
          console.log(data);
          if(!data.title){
            return;
          }

          // const listaId = this.desdeosScervice.crearLista(data.title);
          lista.title = data.title;
          this.desdeosScervice.guardarStorage();
          // this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          //crear la lista
        }
      }
    ]
  });
  this.lista.closeSlidingItems();
  alert.present();
// this.router.navigateByUrl('/tabs/tab1/agregar');
}

}
