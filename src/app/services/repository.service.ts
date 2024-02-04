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
  getAll(): Observable<Character[]> {
    return this.http.get<Request>(this.urlBase).pipe(
      map((data: Request) => {
        return data.results;
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
  getByProperty(key: string, value: string) {
    const url = this.urlBase + `?${key}=${value}`;
    return this.http.get<Request>(url).pipe(
      map((data: Request) => {
        return Array.isArray(data.results) ? data.results : [data.results];
      })
    );
  }
}
