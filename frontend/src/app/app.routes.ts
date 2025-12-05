 import { Routes } from '@angular/router';
 import { LoginComponent } from './auth/login/login.component';
 import { RegisterComponent } from './auth/register/register.component';
 import { ProfileComponent } from './auth/profile/profile.component';
import { HomeComponent } from './home/home/home.component';
import { WalletComponent } from './wallet/wallet/wallet.component';
import { InvestmentsComponent } from './investments/investments/investments.component';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'profile', component: ProfileComponent },

//   // redirect alla login come fallback
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: '**', redirectTo: 'login' }
// ];

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Home page dopo login
  { path: 'home', component: HomeComponent },

  // Sotto-sezioni di home
  { path: 'wallet', component: WalletComponent },
  { path: 'investments', component: InvestmentsComponent },

  // Default
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Fallback
  { path: '**', redirectTo: 'home' }
];