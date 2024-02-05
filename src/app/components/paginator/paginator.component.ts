import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'up-paginator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Output() eventPage = new EventEmitter<number>();
  page = 1;
  store = inject(StoreService);

  setPage(count: number) {
    this.eventPage.next(count);
  }
}
