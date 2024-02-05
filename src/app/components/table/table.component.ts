import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Character } from '../../model/character';
import { StoreService } from '../../services/store.service';
import { SummaryFilterComponent } from '../summary.filter/summary.filter.component';

@Component({
  selector: 'up-table',
  standalone: true,
  imports: [CommonModule, SummaryFilterComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export default class TableComponent {
  character: Character[] = [];
  store = inject(StoreService);
}
