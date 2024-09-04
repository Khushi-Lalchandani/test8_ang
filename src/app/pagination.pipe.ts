import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pagination' })
export class PaginationPipe implements PipeTransform {
  transform(value: any, currentPage: number, itemsPerPage: number) {
    const start = (+currentPage - 1) * +itemsPerPage;
    const end = +start + +itemsPerPage;

    return value.slice(start, end);
  }
}
