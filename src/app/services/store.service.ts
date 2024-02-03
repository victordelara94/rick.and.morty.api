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
  firstCharacters$ = new BehaviorSubject<Character[]>([]);

  getAllCharacters() {
    return this.allCharacters$.asObservable();
  }
  getFirstCharacters() {
    return this.firstCharacters$.asObservable();
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
      this.firstCharacters$.next(data);
    });
  }
  updateCharacters(character: Character) {
    this.allCharacters$.next(
      this.allCharacters$.value.map((item) =>
        item.id === character.id ? character : item
      )
    );
  }
}
