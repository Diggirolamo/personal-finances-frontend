import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Investimento } from '../../models/investimento.model';
import { Movimento } from '../../models/movimento.model';
import { InvestimentoService } from '../../../core/services/investimento.service';
import { MovimentoService } from '../../../core/services/movimento.service';

@Component({
  selector: 'app-lista-movimenti',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './lista-movimenti.component.html',
  styleUrl: './lista-movimenti.component.scss'
})
export class ListaMovimentiComponent implements OnInit {
  investments: Investimento[] = [];
  movements: Movimento[] = [];
  selectedInvestmentId: number | null = null;
  loadingInvestments = false;
  loadingMovements = false;
  error: string | null = null;

  // TODO: sostituire con userId reale da auth
  private readonly userId = 1;

  constructor(
    private investimentoService: InvestimentoService,
    private movimentoService: MovimentoService
  ) {}

  ngOnInit(): void {
    this.loadInvestments();
  }

  loadInvestments(): void {
    this.loadingInvestments = true;
    this.error = null;
    this.investimentoService.listByUser(this.userId).subscribe({
      next: (data) => {
        this.investments = data;
        this.loadingInvestments = false;
        if (data.length) {
          this.selectedInvestmentId = data[0].id;
          this.loadMovements();
        }
      },
      error: () => {
        this.error = 'Errore nel caricamento degli investimenti';
        this.loadingInvestments = false;
      },
    });
  }

  loadMovements(): void {
    if (!this.selectedInvestmentId) {
      this.movements = [];
      return;
    }
    this.loadingMovements = true;
    this.movimentoService.listByInvestment(this.selectedInvestmentId).subscribe({
      next: (data) => {
        this.movements = data;
        this.loadingMovements = false;
      },
      error: () => {
        this.error = 'Errore nel caricamento dei movimenti';
        this.loadingMovements = false;
      },
    });
  }
}
