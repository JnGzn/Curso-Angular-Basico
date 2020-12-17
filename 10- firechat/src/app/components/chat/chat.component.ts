import { element } from 'protractor';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {
  mensaje = '';
  mensajes = [];
  element: any;


  constructor(public chatService: ChatService,
              ) {

    this.chatService.cargarMensajes().subscribe( () => {
      setTimeout(() => {

        this.element.scrollTop = this.element.scrollHeight;
      }, 20);

    });

  }



  ngOnInit(): void {
    this.element = document.getElementById('app-mensajes');
    this.element.scrollTop = this.element.scrollHeight;


  }


  enviarMensaje(){
    if(!this.mensaje) { return }
    this.chatService.agregarMensaje(this.mensaje)
    .then(() => this.mensaje = '')
    .catch((err)=> console.error('error '+err))
  }
}
