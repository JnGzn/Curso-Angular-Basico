import { Component } from '@angular/core';
import { DesdeosService } from 'src/app/services/desdeos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public desdeosService:DesdeosService) {
    
  }

}
