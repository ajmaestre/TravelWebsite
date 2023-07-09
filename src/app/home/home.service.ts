import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL: string = '';

  constructor(private http: HttpClient) { }

  getTouristic(): Observable<any>{
    return this.http.get(`${this.BASE_URL}`).pipe(
      tap(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

}
