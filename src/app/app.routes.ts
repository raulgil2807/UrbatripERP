import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path:'**',
    redirectTo: '/tasks',
  },
];
