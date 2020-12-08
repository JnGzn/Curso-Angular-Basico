import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localfr from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

registerLocaleData(localfr);
registerLocaleData(localEs);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,

  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
