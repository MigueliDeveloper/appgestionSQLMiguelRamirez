"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
// Configuramos dotenv
dotenv_1.default.config();
const server = new server_1.default();
