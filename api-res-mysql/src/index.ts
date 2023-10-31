/** 
 * 
 * TODO: 
 * 
 * Archivo: index.ts
 * 
 * Propósito: Este archivo es el punto de entrada del servidor Node.js.
 * 
 * Importaciones:
 * 
 * dotenv: Una biblioteca para leer variables de entorno desde un archivo .env.
 * Server: El modelo para el servidor.
 */

import dotenv from 'dotenv';
import Server from "./models/server";

// Configuramos dotenv
dotenv.config();

const server = new Server();
