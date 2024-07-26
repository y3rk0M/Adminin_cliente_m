import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000'; // URL del backend

  async getClients(): Promise<any[]> {
    const response = await axios.get(`${this.apiUrl}/clients`);
    return response.data;
  }

  async logout(sessionId: string): Promise<void> {
    await axios.post(`${this.apiUrl}/logout`, { sessionId });
  }
}
