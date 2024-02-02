import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'up-root',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rick.and.morty.api';
  store = inject(RepositoryService);
  ngOnInit() {
    this.store.getAll().subscribe((data) => console.log(data));
  }
}
