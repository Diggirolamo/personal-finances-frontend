import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Investimento } from '../../models/investimento.model';
import { InvestimentoService } from '../../../core/services/investimento.service';
import { MovimentoService } from '../../../core/services/movimento.service';
import { MovementType } from '../../models/movimento.model';

@Component({
  selector: 'app-nuovo-movimento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nuovo-movimento.component.html',
  styleUrl: './nuovo-movimento.component.scss',
})
export class NuovoMovimentoComponent implements OnInit {
  form: FormGroup;
  investments: Investimento[] = [];
  loading = false;
  error: string | null = null;
  success = false;
  movementTypes: MovementType[] = ['BUY', 'SELL'];

  // TODO: sostituire con userId reale da auth
  private readonly userId = 1;

  constructor(
    private fb: FormBuilder,
    private investimentoService: InvestimentoService,
    private movimentoService: MovimentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      investmentId: [null, Validators.required],
      type: ['BUY', Validators.required],
      quantity: [null, [Validators.required, Validators.min(0.000001)]],
      pricePerUnit: [null, [Validators.required, Validators.min(0.000001)]],
      dateTime: [new Date().toISOString().slice(0, 16), Validators.required],
      note: [''],
    });
  }

  ngOnInit(): void {
    const presetId = Number(this.route.snapshot.queryParamMap.get('investmentId')) || null;
    this.loadInvestments(presetId);
  }

  loadInvestments(presetId: number | null): void {
    this.investimentoService.listByUser(this.userId).subscribe({
      next: (data) => {
        this.investments = data;
        if (presetId && data.find((i) => i.id === presetId)) {
          this.form.patchValue({ investmentId: presetId });
        } else if (data.length) {
          this.form.patchValue({ investmentId: data[0].id });
        }
      },
      error: () => {
        this.error = 'Errore nel caricamento degli investimenti';
      },
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { investmentId, ...payload } = this.form.value;
    this.loading = true;
    this.error = null;
    this.success = false;

    this.movimentoService.add(investmentId, payload).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.router.navigate(['/investimenti/movimenti'], {
          queryParams: { investmentId },
        });
      },
      error: () => {
        this.loading = false;
        this.error = 'Errore nel salvataggio del movimento';
      },
    });
  }
}
