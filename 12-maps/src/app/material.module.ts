import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ], exports: [

    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
