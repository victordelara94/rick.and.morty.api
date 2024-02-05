import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../model/character';
import { StoreService } from '../../services/store.service';
import { CardComponent } from '../card/card.component';
import { FilterComponent } from '../filter/filter.component';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'up-root',
  standalone: true,
  imports: [CommonModule, CardComponent, FilterComponent, PaginatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class homeComponent implements OnInit {
  character: Character[] = [];
  store = inject(StoreService);
  ngOnInit() {
    this.store.loadAllCharacters();
  }
  selectPage(event: number) {
    this.store.setPage(event);
    if (this.store.getFilter()) {
      this.store.loadFilterCharacters();
    } else {
      this.store.loadAllCharacters();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
