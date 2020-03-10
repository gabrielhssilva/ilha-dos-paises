import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this._http.get<any[]>('https://restcountries.eu/rest/v2/all');
  }
}
