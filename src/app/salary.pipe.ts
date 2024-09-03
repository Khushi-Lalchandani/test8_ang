import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'salary' })
export class SalaryPipe implements PipeTransform {
  transform(value: number) {
    return (value / 1000).toFixed(1) + 'k';
  }
}
