import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form: FormGroup;
  error?: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  submit() {
    if (this.form.invalid) return;

    const request: AuthenticationRequest = this.form.getRawValue();
    this.auth.authenticate(request).subscribe({
      next: () => this.router.navigate(['/home']),
      error: err => this.error = err?.error || 'Login failed'
    });
  }
}