/** 
 * 
 * TODO: 
 * 
 * Archivo: storage.ts
 * 
 * Propósito: Este archivo contiene el servicio para el manejo de archivos.
 * 
 * Importaciones:
 * 
 * Storage: La interfaz que define los datos de un archivo.
 * Archivo: El modelo de datos para la tabla archivo en la base de datos.
 * 
 * */

import { Storage } from "../interfaces/storage";
import Archivo from "../models/storage";

/** 
 * 
 * TODO: 
 * 
 * registerUpload: La función que registra un nuevo archivo en la base de datos.
 * 
 * La función registerUpload() recibe los siguientes datos:
 * 
 * fileName: El nombre del archivo.
 * idUser: El ID del usuario que subió el archivo.
 * path: La ruta al archivo.
 * La función crea un nuevo registro en la tabla archivo de la base de datos con los datos recibidos.
 * */
const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await Archivo.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };
