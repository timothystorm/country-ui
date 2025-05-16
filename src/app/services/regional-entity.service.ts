import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegionalEntity} from '../models/regional-entity';

@Injectable({
  providedIn: 'root'
})
export class RegionalEntityService {
  private static apiUrl = '/api/regionalentities';
  private http: HttpClient = inject(HttpClient);

  readRegionalEntities(): Observable<RegionalEntity[]> {
    return this.http.get<RegionalEntity[]>(RegionalEntityService.apiUrl);
  }

  saveRegionalEntity(entity: RegionalEntity): Observable<RegionalEntity> {
    if (entity.id) return this.http.put(`${RegionalEntityService.apiUrl}/${entity.id}`, entity);
    return this.http.post<RegionalEntity>(RegionalEntityService.apiUrl, entity);
  }

  deleteRegionalEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${RegionalEntityService.apiUrl}/${id}`);
  }
}
