import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  urlBase = 'https://rickandmortyapi.com/api/character';
  http = inject(HttpClient);
  getAll(): Observable<object> {
    return this.http.get(this.urlBase);
  }
}
