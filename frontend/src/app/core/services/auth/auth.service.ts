import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, user);
  }

  login(email: string, password: string) {
    return this.http.get(`${this.apiURL}/login`, { 
      params: { email, password }
    });
  }
}
