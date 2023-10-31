import { Request } from "express";
import multer, { diskStorage } from "multer";

/** 
 * TODO: 
 * 
 * Archivo: file.ts
 * Propósito: Este archivo define un middleware de Multer para subir archivos al servidor.
 * 
 * Importaciones:
 * 
 * Request: La interfaz de Express que representa una solicitud HTTP.
 * multer: El paquete Multer para subir archivos.
 * diskStorage: La función diskStorage de Multer para almacenar archivos en el disco.
 *  
 * Constantes:
 * PATH_STORAGE: La ruta del directorio donde se almacenarán los archivos.
 * La constante PATH_STORAGE define la ruta del directorio donde se almacenarán los archivos.
 */
const PATH_STORAGE = `${process.cwd()}/storage`;

/**
 * 
 * TODO:
 * 
 * Variables:
 * 
 * storage: Una instancia de la función diskStorage que define cómo se almacenarán los archivos en el disco.
 * multerMiddleware: Un middleware de Multer que utiliza la instancia storage para almacenar los archivos en el disco.
 * 
 * La variable storage es una instancia de la función diskStorage que define cómo se almacenarán los archivos en el disco. Las funciones destination() y filename() de storage se encargan de definir dónde se almacenarán los archivos y cómo se nombrarán.
 * La variable multerMiddleware es un middleware de Multer que utiliza la instancia storage para almacenar los archivos en el disco.
 */
const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

/**
 * 
 * TODO:
 * 
 * Funciones:
 * 
 * export default multerMiddleware: Exporta el middleware de Multer.
 */
export default multerMiddleware;
