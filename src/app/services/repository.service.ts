import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Request } from '../model/request';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  urlBase = 'https://rickandmortyapi.com/api/character';
  http = inject(HttpClient);
  getAll(): Observable<Result[]> {
    return this.http.get<Request>(this.urlBase).pipe(
      map((data: Request) => {
        console.log(data.results, 'results');
        return data.results;
      })
    );
  }
}
