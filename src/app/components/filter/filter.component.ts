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
    this.store.setPage(0);
    if (event.type === 'change') {
      this.store.setFilterActive('status', this.selectedStatus);
    } else {
      this.store.setFilterActive('name', this.searchTerm);
    }
    this.store.loadFilterCharacters();
  }
}
