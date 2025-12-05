import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  constructor(public auth: AuthService, private router: Router) {}
}
