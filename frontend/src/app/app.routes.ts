import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'investimenti',
    loadChildren: () =>
      import('./investimenti/investimenti.routes').then((m) => m.INVESTIMENTI_ROUTES),
  },
  { path: '', redirectTo: 'investimenti', pathMatch: 'full' },
];
