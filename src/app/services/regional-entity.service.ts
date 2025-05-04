import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegionalEntity} from '../models/regional-entity';

@Injectable({
  providedIn: 'root'
})
export class RegionalEntityService {
  private apiUrl = 'http://localhost:8080/api/regionalentities';

  constructor(
    private http: HttpClient,
  ) { }

  getRegionalEntities(): Observable<RegionalEntity[]> {
    return this.http.get<RegionalEntity[]>(this.apiUrl);
  }

  getRegionalEntityById(id: number): Observable<RegionalEntity> {
    return this.http.get<RegionalEntity>(`${this.apiUrl}/${id}`);
  }
}
