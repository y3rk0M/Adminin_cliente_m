import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';

  // Asegúrate de que el método onSubmit está aquí
  onSubmit() {
    // Implementa la lógica de lo que debe hacer el formulario al enviarse
    console.log('Formulario enviado');
  }

  username: string = ''; // Agrega estas propiedades
  password: string = '';
}
