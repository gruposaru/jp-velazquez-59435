import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(args);
    const result =value.nombre +" "+value.apellido;
    if(args[0]==='uppercase'){
      return `${result}`.toUpperCase();
    }
    return result;
  }

}
