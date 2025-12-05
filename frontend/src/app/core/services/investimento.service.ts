import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Investimento } from '../../investimenti/models/investimento.model';
import { Movimento } from '../../investimenti/models/movimento.model';
import { environment } from '../../../environments/environment';

const API_BASE = `${environment.apiUrl}/investments`;

@Injectable({ providedIn: 'root' })
export class InvestimentoService {
  constructor(private http: HttpClient) {}

  listByUser(userId: number): Observable<Investimento[]> {
    return this.http.get<Investimento[]>(`${API_BASE}/user/${userId}`);
  }

  get(id: number): Observable<Investimento> {
    return this.http.get<Investimento>(`${API_BASE}/${id}`);
  }

  create(payload: Partial<Investimento>): Observable<Investimento> {
    return this.http.post<Investimento>(API_BASE, payload);
  }

  update(id: number, payload: Partial<Investimento>): Observable<Investimento> {
    return this.http.put<Investimento>(`${API_BASE}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/${id}`);
  }

  listMovimenti(investmentId: number): Observable<Movimento[]> {
    return this.http.get<Movimento[]>(`${API_BASE}/${investmentId}/movements`);
  }

  addMovimento(investmentId: number, payload: Partial<Movimento>): Observable<Movimento> {
    return this.http.post<Movimento>(`${API_BASE}/${investmentId}/movements`, payload);
  }
}
