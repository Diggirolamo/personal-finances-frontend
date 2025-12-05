import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthenticationRequest, AuthenticationResponse, RegisterRequest, Role, User } from './models';
import { Observable, tap } from 'rxjs';

const TOKEN_KEY = 'auth_token';
const REFRESH_KEY = 'refresh_token';
const CURRENT_USER = 'current_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base = `${environment.apiUrl}/auth`;
  private platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) { }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private saveTokens(res: AuthenticationResponse) {
    if (!this.isBrowser()) return;

    if (res?.token) localStorage.setItem(TOKEN_KEY, res.token);
    if (res?.refreshToken) localStorage.setItem(REFRESH_KEY, res.refreshToken);
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(REFRESH_KEY);
  }

  logout(): void {
    if (!this.isBrowser()) return;

    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(CURRENT_USER);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // --- RESTO DEL SERVICE INVARIATO ---
  register(req: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.base}/register`, req).pipe(
      tap(res => this.saveTokens(res))
    );
  }

  authenticate(req: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.base}/authenticate`, req).pipe(
      tap(res => this.saveTokens(res))
    );
  }

  update(req: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.base}/update`, req).pipe(
      tap(res => this.saveTokens(res))
    );
  }

  delete(id: number): Observable<AuthenticationResponse> {
    return this.http.delete<AuthenticationResponse>(`${this.base}/delete/${id}`);
  }

  refreshToken(refreshToken: string): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.base}/refreshToken`, { refreshToken }).pipe(
      tap(res => this.saveTokens(res))
    );
  }

  changeRole(userId: number, role: Role): Observable<string> {
    return this.http.put<string>(`${this.base}/change-role/${userId}?role=${role}`, null);
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.base}/user/profile`);
  }

}