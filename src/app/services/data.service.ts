import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '/api/json/v1/1/categories.php';

  constructor(private _http: HttpClient) {}

  getData(): Observable<any[]> {
    return (
      this._http
        // .get<any[]>('https://randomuser.me/api')
        .get<any[]>(this.apiUrl)
        .pipe(map((res: any) => res.categories))
    );
  }
}
