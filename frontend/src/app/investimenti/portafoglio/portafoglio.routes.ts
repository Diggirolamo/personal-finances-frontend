import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { GraficoAllocazioneComponent } from './grafico-allocazione/grafico-allocazione.component';
import { GraficoPerformanceComponent } from './grafico-performance/grafico-performance.component';

export const PORTAFOGLIO_ROUTES: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'allocazione', component: GraficoAllocazioneComponent },
  { path: 'performance', component: GraficoPerformanceComponent },
];
