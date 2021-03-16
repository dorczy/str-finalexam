import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] | null {
    if( !Array.isArray(value) || !key ) {
      return value;
    }

    return value.sort((a, b) => {
      if(typeof a[key] === "number" && b[key] === "number") {
        return a[key] - b[key];
      } else {
        a = a[key].toString().toLowerCase();
        b = b[key].toString().toLowerCase();
        return a.localeCompare(b);
      }
    })

  }

}
