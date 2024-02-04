import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'up-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  selectedStatus = '';
  suggestions = [];
  store = inject(StoreService);
  selectSearch() {
    this.store.loadFilterCharacters('status', this.selectedStatus);
  }
}
