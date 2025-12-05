import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Investimenti</h2><p>Qui metteremo azioni, ETF e quantità.</p>`
})
export class InvestmentsComponent {}