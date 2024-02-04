import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../model/character';
import { StoreService } from '../../services/store.service';
import { CardComponent } from '../card/card.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'up-root',
  standalone: true,
  imports: [CommonModule, CardComponent, FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class homeComponent implements OnInit {
  character: Character[] = [];
  store = inject(StoreService);
  ngOnInit() {
    this.store.loadAllCharacters();
  }
}
