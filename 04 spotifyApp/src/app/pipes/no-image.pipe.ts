import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): unknown {
    if(!images){
      return 'assets/img/banner-ico.png';
    }

    if(images.length > 0){
      return images[0].url;
    }
    return 'assets/img/banner-ico.png';
  }

}
