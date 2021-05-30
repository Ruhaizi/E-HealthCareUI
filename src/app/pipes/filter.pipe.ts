import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] , filterString: string, medName: string): any[] {
    const resultArray=[];
    if(value){
    if(value.length===0|| filterString===''|| medName===''){
      return value;
    }

    for(const item of value){
      if(item[medName]===filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

  }

}
