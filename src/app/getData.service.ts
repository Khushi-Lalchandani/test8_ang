import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class getDataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http
      .get<any>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}
