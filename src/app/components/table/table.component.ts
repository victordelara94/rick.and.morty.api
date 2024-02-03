import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../model/character';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'up-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export default class TableComponent implements OnInit {
  character: Character[] = [];
  store = inject(StoreService);
  ngOnInit() {
    this.store.loadFirstCharacters(10);
  }
}
