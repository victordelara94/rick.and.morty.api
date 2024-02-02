import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../model/character';

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
  handleForm() {
    console.log(this.character, 'form');
  }
  emitClose() {
    this.event.next(false);
  }
}
