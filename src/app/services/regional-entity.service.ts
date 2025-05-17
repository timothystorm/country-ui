import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegionalEntity} from '../models/regional-entity';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionalEntityService {
  private http: HttpClient = inject(HttpClient);

  readRegionalEntities(): Observable<RegionalEntity[]> {
    return this.http.get<RegionalEntity[]>(environment.apiUrl);
  }

  saveRegionalEntity(entity: RegionalEntity): Observable<RegionalEntity> {
    if (entity.id) return this.http.put(`${environment.apiUrl}/${entity.id}`, entity);
    return this.http.post<RegionalEntity>(environment.apiUrl, entity);
  }

  deleteRegionalEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${id}`);
  }
}
