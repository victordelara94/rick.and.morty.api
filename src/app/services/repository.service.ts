import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../model/character';
import { Request } from '../model/request';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  urlBase = 'https://rickandmortyapi.com/api/character/';
  http = inject(HttpClient);
  getAll(page: number): Observable<Character[]> {
    const url = this.urlBase + `?page=${page}`;
    return this.http.get<Request>(url).pipe(
      map((data: Request) => {
        return data.results;
      })
    );
  }
  getByProperty(key: string, value: string, page: number) {
    const url = this.urlBase + `?page=${page}&${key}=${value}`;
    console.log(url);
    return this.http.get<Request>(url).pipe(
      map((data: Request) => {
        return Array.isArray(data.results) ? data.results : [data.results];
      })
    );
  }
  getSpecificNumberOfCharacters(quantity: number[]): Observable<Character[]> {
    const url = this.urlBase + `${quantity}`;
    return this.http.get<Character[]>(url).pipe(
      map((data: Character[] | Character) => {
        return Array.isArray(data) ? data : [data];
      })
    );
  }
}
