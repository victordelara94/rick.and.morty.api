import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../model/character';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  repository = inject(RepositoryService);
  allCharacters$ = new BehaviorSubject<Character[]>([]);

  getAllCharacters() {
    return this.allCharacters$.asObservable();
  }

  loadAllCharacters() {
    this.repository
      .getAll()
      .subscribe((data) => this.allCharacters$.next(data));
  }
  loadFirstCharacters(quantity: number) {
    if (!quantity) {
      quantity = 10;
    }
    const ids = [];
    for (let number = 1; number <= quantity; number++) {
      ids.push(number);
    }
    this.repository.getSpecificNumberOfCharacters(ids).subscribe((data) => {
      this.allCharacters$.next(data);
    });
  }
  loadFilterCharacters(key: string, value: string) {
    this.repository
      .getByProperty(key, value)
      .subscribe((data) => this.allCharacters$.next(data));
  }

  updateCharacters(character: Character) {
    this.allCharacters$.next(
      this.allCharacters$.value.map((item) =>
        item.id === character.id ? character : item
      )
    );
  }
}
