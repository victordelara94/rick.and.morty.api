import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Character } from './model/character';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'up-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rick.and.morty.api';
  characters: Character[] = [];
  store = inject(RepositoryService);
  ngOnInit() {
    this.store.getAll().subscribe((data) => (this.characters = data));
  }
}
