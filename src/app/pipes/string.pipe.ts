
import { Pipe, PipeTransform } from '@angular/core';

// Below pipe converting a word to snake case in upper case
// e.g: 'hello' => 'H-E-L-L-O'
@Pipe({
  name: 'convertToSnake',
})
export class ConvertToSnack implements PipeTransform {
  transform(value: string | number): string {
    return String(value)
      .split(' ')
      .map((word) => word.split('').join('-'))
      .join('-')
      .toUpperCase();
  }
}