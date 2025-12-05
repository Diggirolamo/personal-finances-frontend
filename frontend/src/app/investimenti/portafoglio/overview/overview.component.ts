import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Investimento } from '../../models/investimento.model';
import { InvestimentoService } from '../../../core/services/investimento.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent implements OnInit {
  investments: Investimento[] = [];
  loading = false;
  error: string | null = null;

  // TODO: sostituire con userId reale da auth
  private readonly userId = 1;

  constructor(private investimentoService: InvestimentoService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.investimentoService.listByUser(this.userId).subscribe({
      next: (data) => {
        this.investments = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Errore nel caricamento del portafoglio';
        this.loading = false;
      },
    });
  }

  get totalInvestments(): number {
    return this.investments.length;
  }

  get estimatedValue(): number {
    return this.investments.reduce((acc, inv) => {
      const qty = inv.totalQuantity ?? 0;
      const price = inv.averagePrice ?? 0;
      return acc + qty * price;
    }, 0);
  }
}
