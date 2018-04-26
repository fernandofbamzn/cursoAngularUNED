import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponente'
})
export class ExponentePipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
