import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../model/character';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'up-update-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.form.component.html',
  styleUrl: './update.form.component.scss',
})
export class UpdateFormComponent {
  @Input() character!: Character;
  @Output() event = new EventEmitter<boolean>();
  store = inject(StoreService);

  handleForm() {
    this.store.updateCharacters(this.character);
    this.emitClose();
  }
  emitClose() {
    this.event.next(false);
  }
}
