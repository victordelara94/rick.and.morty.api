import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../model/character';
import { Request } from '../model/request';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  urlBase = 'https://rickandmortyapi.com/api/character';
  http = inject(HttpClient);
  getAll(): Observable<Character[]> {
    return this.http.get<Request>(this.urlBase).pipe(
      map((data: Request) => {
        return data.results;
      })
    );
  }
}
