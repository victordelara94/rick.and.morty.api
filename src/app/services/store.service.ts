import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character, Select } from '../model/character';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  repository = inject(RepositoryService);
  allCharacters$ = new BehaviorSubject<Character[]>([]);
  actualPage$ = new BehaviorSubject<number>(1);
  filter$ = new BehaviorSubject<Select | null>(null);

  getAllCharacters() {
    return this.allCharacters$.asObservable();
  }

  loadAllCharacters() {
    this.repository
      .getAll(this.actualPage$.value)
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
  loadFilterCharacters() {
    const filter: Select = this.filter$.value!;
    this.repository
      .getByProperty(filter.key, filter.value, this.actualPage$.value)
      .subscribe((data) => this.allCharacters$.next(data));
  }

  updateCharacters(character: Character) {
    this.allCharacters$.next(
      this.allCharacters$.value.map((item) =>
        item.id === character.id ? character : item
      )
    );
  }
  setPage(count: number) {
    if (count === 0) {
      this.actualPage$.next(count + 1);
    } else {
      this.actualPage$.next(this.actualPage$.value + count);
    }
  }
  setFilterActive(key: string, filter: string) {
    this.filter$.next({ key, value: filter });
  }
  getFilter() {
    return this.filter$.value;
  }
  getActualPage() {
    return this.actualPage$.value;
  }
}
