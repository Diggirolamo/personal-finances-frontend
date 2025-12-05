import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movimento } from '../../investimenti/models/movimento.model';
import { environment } from '../../../environments/environment';

const INVESTMENT_API_BASE = `${environment.apiUrl}/investments`;

@Injectable({ providedIn: 'root' })
export class MovimentoService {
  constructor(private http: HttpClient) {}

  listByInvestment(investmentId: number): Observable<Movimento[]> {
    return this.http.get<Movimento[]>(`${INVESTMENT_API_BASE}/${investmentId}/movements`);
  }

  add(investmentId: number, payload: Partial<Movimento>): Observable<Movimento> {
    return this.http.post<Movimento>(`${INVESTMENT_API_BASE}/${investmentId}/movements`, payload);
  }
}
