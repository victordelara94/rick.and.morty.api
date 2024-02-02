import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'up-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() character!: Character;
  ngOnInit(): void {
    console.log(this.character);
  }
}
