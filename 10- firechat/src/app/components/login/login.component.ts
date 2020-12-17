import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _cs: ChatService) { }

  ngOnInit(): void {
  }

  ingresar(plataforma: string): void{
    this._cs.login(plataforma);
  }
}
