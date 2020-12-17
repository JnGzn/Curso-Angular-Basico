import { ChatService } from './services/chat.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // chats: Observable<any[]>;
  constructor(firestore: AngularFirestore, public _cs: ChatService) {
    // this.chats = firestore.collection('chats').valueChanges();
  }

  logout(): void{
    this._cs.logout();
  }
}
