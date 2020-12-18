import { ImplicitReceiver } from '@angular/compiler';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import Swiper from "swiper";
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input()
  movies: Movie[];

  constructor() { }
  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters

      loop: true,
    })
  }

  ngOnInit(): void {
  }

  // onSwiper(swiper) {
  //   console.log(swiper)
  // }
  // onSlideChange() {
  //   console.log('slide change')
  // }

}
