import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firm'
})
export class FirmPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value as string).concat(' @ADRENALINA');
  }

}
