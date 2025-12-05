import { Routes } from '@angular/router';
import { ListaAssetComponent } from './lista-asset/lista-asset.component';
import { NuovoAssetComponent } from './nuovo-asset/nuovo-asset.component';
import { DettaglioAssetComponent } from './dettaglio-asset/dettaglio-asset.component';

export const ASSET_ROUTES: Routes = [
  { path: '', component: ListaAssetComponent },
  { path: 'nuovo', component: NuovoAssetComponent },
  { path: ':id', component: DettaglioAssetComponent },
];
