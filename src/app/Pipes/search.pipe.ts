import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filteredString:string) {
    if(value.length===0 || filteredString=== ''){
      return value;

    }
    const dta=[];
    for (const daata of value){
      if(daata['title']===filteredString || daata['_id']===filteredString){
        dta.push(daata);
      }
    }
    return dta;
  }

}
