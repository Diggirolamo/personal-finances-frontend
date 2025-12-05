import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home/home.component'; 
import { WalletComponent } from './wallet/wallet/wallet.component';
import { InvestmentsComponent } from './investments/investments/investments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'investments', component: InvestmentsComponent },
  { path: '**', redirectTo: 'login' }
];