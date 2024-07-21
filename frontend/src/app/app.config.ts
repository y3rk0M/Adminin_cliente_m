// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';

// Define las rutas
const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

// Configuración de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration()
  ]
};
