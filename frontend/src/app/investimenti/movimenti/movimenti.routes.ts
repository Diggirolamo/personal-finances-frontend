import { Routes } from '@angular/router';
import { ListaMovimentiComponent } from './lista-movimenti/lista-movimenti.component';
import { NuovoMovimentoComponent } from './nuovo-movimento/nuovo-movimento.component';

export const MOVIMENTI_ROUTES: Routes = [
  { path: '', component: ListaMovimentiComponent },
  { path: 'nuovo', component: NuovoMovimentoComponent },
];
