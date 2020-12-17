import { Chat } from './../interface/chat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  chats: Chat[];
  usuario: any = {}
  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {

    this.auth.authState.subscribe(user => {
      console.log(user);
      if (!user){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;

    });

  }

  login(proveedor: string) {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }



  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Chat>('chats', ref =>
                                                      ref.orderBy('fecha', 'desc').limit(5)
                                                    );

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Chat[]) => {
      this. chats = [];

      for (const mensaje of mensajes) {
        this.chats.unshift(mensaje)
      }

      return this.chats;
      // this. chats = mensajes;
    })
    )
  }

  agregarMensaje(texto: string){
    const mensaje: Chat = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    return this.itemsCollection.add(mensaje);

  }

  // addItem(item: Item) {
  //   this.itemsCollection.add(item);
  // }
}
