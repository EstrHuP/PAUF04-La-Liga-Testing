import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PartidoService {
  private apiURL = `${environment.apiUrl}/partidos`;

  constructor(private http: HttpClient) {}

  createPartido(partido: any): Observable<any> {
    return this.http.post(this.apiURL, partido);
  }

  getPartidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  deletePartido(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updatePartido(id: string, partido: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, partido);
  }
}
