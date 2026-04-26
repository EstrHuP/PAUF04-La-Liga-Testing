import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

export interface Jugador {
  id: number;
  nombre: string;
  posicion: string;
  dorsal: number;
  club_id: number;
}

@Injectable({ providedIn: 'root' })
export class JugadoresService {
  private apiURL = `${environment.apiUrl}/jugadores`;

  constructor(private http: HttpClient) {}

  getJugadores() {
    return this.http.get<Jugador[]>(this.apiURL);
  }
}
