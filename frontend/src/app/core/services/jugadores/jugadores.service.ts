import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JugadoresService {
  private apiURL = 'http://localhost:3000/api/jugadores';

  constructor(private http: HttpClient) {}

  createJugador(jugador: any): Observable<any> {
    return this.http.post(this.apiURL, jugador);
  }

  getJugadores() {
    return this.http.get<any[]>(this.apiURL);
  }

  deleteJugador(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updateJugador(id: string, jugador: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, jugador);
  }
}
