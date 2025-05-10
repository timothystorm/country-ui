import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegionalEntity} from '../models/regional-entity';

@Injectable({
  providedIn: 'root'
})
export class RegionalEntityService {
  private apiUrl = '/api/regionalentities';
  private http: HttpClient = inject(HttpClient);

  readRegionalEntities(): Observable<RegionalEntity[]> {
    return this.http.get<RegionalEntity[]>(this.apiUrl);
  }

  saveRegionalEntity(entity: RegionalEntity): Observable<RegionalEntity> {
    if (entity.id) return this.http.put(`${this.apiUrl}/${entity.id}`, entity);
    return this.http.post<RegionalEntity>(this.apiUrl, entity);
  }

  deleteRegionalEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getRegionalEntityById(id: number): Observable<RegionalEntity> {
    return this.http.get<RegionalEntity>(`${this.apiUrl}/${id}`);
  }
}
