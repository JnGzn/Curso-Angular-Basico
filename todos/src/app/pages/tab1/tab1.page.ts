import { DesdeosService } from './../../services/desdeos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
        }, {
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
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }

}
