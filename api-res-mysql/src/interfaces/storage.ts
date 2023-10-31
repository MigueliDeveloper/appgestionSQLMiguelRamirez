/** 
 * 
 * TODO: 
 * 
 * interfaz: Storage
 * Propósito: Esta interfaz define los datos necesarios para almacenar un archivo en el servidor.
 * 
 * Campos:
 * fileName: El nombre del archivo.
 * path: La ruta del archivo en el servidor.
 * idUser: El ID del usuario que creó el archivo.
 * Documentación detallada:
 * Campos:
 * El campo fileName es obligatorio y representa el nombre del archivo. El campo path es obligatorio y representa la ruta del archivo en el servidor. 
 * El campo idUser es opcional y representa el ID del usuario que creó el archivo
 * 
 * */

export interface Storage {
    fileName: string;
    path: string;
    idUser: string;
  }