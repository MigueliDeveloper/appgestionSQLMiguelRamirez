/** 
 * 
 * TODO: 
 * 
 * Archivo: error.handle.ts
 * 
 * Propósito: Este archivo contiene una función para el manejo de errores HTTP.
 * 
 * Importaciones:
 * 
 * Response: El tipo de Express para objetos de respuesta.
 * 
 * Exportaciones:
 * handleHttp: Una función que maneja los errores HTTP.
 * Documentación detallada:
 * 
 * La función handleHttp() toma los siguientes parámetros:
 * 
 * res: El objeto de respuesta de Express.
 * error: El mensaje de error.
 * errorRaw: El error original, si está disponible.
 * La función imprime el error original en la consola. Luego, establece el código de estado de la respuesta en 500 (Error interno del servidor) y envía una respuesta JSON al cliente con el mensaje de error.
 */

import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
