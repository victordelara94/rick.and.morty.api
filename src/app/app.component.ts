import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Character } from './model/character';
import { StoreService } from './services/store.service';

@Component({
  selector: 'up-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rick.and.morty.api';
  character: Character[] = [];
  store = inject(StoreService);
  ngOnInit() {
    this.store.loadFirstCharacters(10);
  }
}
