import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../model/character';
import { StoreService } from '../../services/store.service';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'up-table',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export default class TableComponent implements OnInit {
  character: Character[] = [];
  store = inject(StoreService);
  ngOnInit() {
    this.store.getFirstCharacters();
  }
}
