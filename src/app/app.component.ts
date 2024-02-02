import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Result } from './model/result';
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
  result: Result[] = [];
  store = inject(RepositoryService);
  ngOnInit() {
    this.store.getAll().subscribe((data) => (this.result = data));
  }
  logItem(item: Result) {
    this.result.map;
    console.log(item, 'a');
  }
}
