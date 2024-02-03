import { Component, Input } from '@angular/core';
import { Character } from '../../model/character';
import { UpdateFormComponent } from '../update.form/update.form.component';

@Component({
  selector: 'up-card',
  standalone: true,
  imports: [UpdateFormComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character!: Character;
  isOpen = false;
  openForm() {
    this.isOpen = true;
  }
  closeForm(event: boolean) {
    this.isOpen = event;
  }
}
