import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];
  sessionId: string | null = '';

  constructor(private clientService: ClientService, private router: Router) {}

  async ngOnInit() {
    this.sessionId = localStorage.getItem('sessionId');
    if (!this.sessionId) {
      this.router.navigate(['/login']);
      return;
    }

    try {
      this.clients = await this.clientService.getClients();
    } catch (error) {
      console.error('Failed to fetch clients', error);
    }
  }

  async logout() {
    if (this.sessionId) {
      await this.clientService.logout(this.sessionId);
      localStorage.removeItem('sessionId');
      this.router.navigate(['/login']);
    }
  }
}
