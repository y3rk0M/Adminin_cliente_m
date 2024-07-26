import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL del backend

  async login(username: string, password: string): Promise<string> {
    const response = await axios.post(`${this.apiUrl}/login`, { username, password });
    return response.data.sessionId;
  }

  async logout(sessionId: string): Promise<void> {
    await axios.post(`${this.apiUrl}/logout`, { sessionId });
  }
}
