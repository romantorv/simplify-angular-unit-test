import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSnake',
})
export class MockConvertToSnack implements PipeTransform {
  transform(value: string | number): string {
    return String(value);
  }
}