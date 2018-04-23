import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLink'
})
export class SearchLinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      if(value.indexOf('http') !== -1) {
        console.log(value.indexOf('http'));

      }


    }

    return value;
  }
}
