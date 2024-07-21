// app.config.server.ts

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Importa la configuración base de la aplicación

// Configuración específica para el servidor
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Proporciona el soporte para renderizado en el lado del servidor
  ]
};

// Combina la configuración base con la configuración del servidor
export const serverAppConfig: ApplicationConfig = {
  ...appConfig,
  ...serverConfig
};

export const config = mergeApplicationConfig(appConfig, serverConfig);