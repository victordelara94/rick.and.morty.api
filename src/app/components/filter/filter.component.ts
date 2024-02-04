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
  searchTerm = '';
  store = inject(StoreService);
  selectSearch(event: Event) {
    if (event.type === 'change') {
      this.store.loadFilterCharacters('status', this.selectedStatus);
    } else {
      this.store.loadFilterCharacters('name', this.searchTerm);
    }
  }
}
