import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
// import { SwiperModule } from 'src/angular/src/public-api';
import SwiperCore from "swiper/core";

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    // SwiperModule
  ], exports: [
    NavbarComponent,
    SlideshowComponent
  ]
})

export class ComponentsModule { }
