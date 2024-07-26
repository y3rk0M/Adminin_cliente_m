import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importa el LoginComponent
import { ClientsComponent } from './clients/clients.component'; // Importa el ClientsComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirige la ruta vacía a '/login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
