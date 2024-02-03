import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component'),
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table/table.component'),
  },
  { path: '**', redirectTo: 'home' },
];
