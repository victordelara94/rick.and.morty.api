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
  character: Character[] = [];
  store = inject(RepositoryService);
  ngOnInit() {
    this.store.getAll().subscribe((data) => (this.character = data));
  }
  logItem(item: Character) {
    this.character.map;
    console.log(item.name, 'a');
  }
}
