import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AssetClass } from '../../investimenti/models/asset.model';
import { environment } from '../../../environments/environment';

const API_BASE = `${environment.apiUrl}/asset-classes`;

@Injectable({ providedIn: 'root' })
export class AssetService {
  constructor(private http: HttpClient) {}

  list(): Observable<AssetClass[]> {
    return this.http.get<AssetClass[]>(API_BASE);
  }

  get(id: number): Observable<AssetClass> {
    return this.http.get<AssetClass>(`${API_BASE}/${id}`);
  }

  create(payload: Partial<AssetClass>): Observable<AssetClass> {
    return this.http.post<AssetClass>(API_BASE, payload);
  }

  update(id: number, payload: Partial<AssetClass>): Observable<AssetClass> {
    return this.http.put<AssetClass>(`${API_BASE}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/${id}`);
  }
}
