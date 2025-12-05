import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AssetClass } from '../../models/asset.model';
import { AssetService } from '../../../core/services/asset.service';

@Component({
  selector: 'app-lista-asset',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-asset.component.html',
  styleUrl: './lista-asset.component.scss'
})
export class ListaAssetComponent implements OnInit {
  assetClasses: AssetClass[] = [];
  loading = false;
  error: string | null = null;

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.assetService.list().subscribe({
      next: (data) => {
        this.assetClasses = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Errore nel caricamento delle asset class';
        this.loading = false;
      },
    });
  }
}
