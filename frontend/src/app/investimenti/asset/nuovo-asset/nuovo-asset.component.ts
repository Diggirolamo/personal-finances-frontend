import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AssetService } from '../../../core/services/asset.service';

@Component({
  selector: 'app-nuovo-asset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nuovo-asset.component.html',
  styleUrl: './nuovo-asset.component.scss'
})
export class NuovoAssetComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;
  success = false;

  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private router: Router
  ) {
    this.form = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(20)]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = null;
    this.success = false;

    this.assetService.create(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.router.navigate(['/investimenti/asset']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Errore nel salvataggio della asset class';
      },
    });
  }
}
