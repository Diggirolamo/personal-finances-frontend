import { Routes } from '@angular/router';

export const INVESTIMENTI_ROUTES: Routes = [
  { path: '', redirectTo: 'portafoglio', pathMatch: 'full' },
  {
    path: 'asset',
    loadChildren: () => import('./asset/asset.routes').then((m) => m.ASSET_ROUTES),
  },
  {
    path: 'movimenti',
    loadChildren: () => import('./movimenti/movimenti.routes').then((m) => m.MOVIMENTI_ROUTES),
  },
  {
    path: 'portafoglio',
    loadChildren: () => import('./portafoglio/portafoglio.routes').then((m) => m.PORTAFOGLIO_ROUTES),
  },
];
