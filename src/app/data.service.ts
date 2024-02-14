import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://api.freecurrencyapi.com/v1/latest';

  constructor(private http: HttpClient) {}

  getApiData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
