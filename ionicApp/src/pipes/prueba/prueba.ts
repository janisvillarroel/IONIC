import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PruebaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'prueba',
})
export class PruebaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.substr(2,4);
  }
}
