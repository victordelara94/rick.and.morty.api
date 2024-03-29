import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'up-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './summary.filter.component.html',
  styleUrl: './summary.filter.component.scss',
})
export class SummaryFilterComponent implements OnInit {
  @ViewChild('refInput') refInput!: ElementRef;
  quantity = 0;
  store = inject(StoreService);
  ngOnInit(): void {
    this.store.loadFirstCharacters(this.quantity);
  }
  handleClick(): void {
    this.quantity = this.refInput.nativeElement.value;
    this.store.loadFirstCharacters(this.quantity);
  }
}
