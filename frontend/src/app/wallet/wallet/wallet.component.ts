import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Portafoglio</h2><p>Qui metteremo entrate, uscite, spese, ecc.</p>`
})
export class WalletComponent {}