import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanatizer:DomSanitizer){}

  transform(value: any, url:string): any {
    if (value == undefined || value == '')
    {
      if (url == 'https://www.youtube.com/embed/')
      {
        value = '7wtfhZwyrcc?list=RDeSfFCtJfVfA';
      }
    }
    return this.domSanatizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
