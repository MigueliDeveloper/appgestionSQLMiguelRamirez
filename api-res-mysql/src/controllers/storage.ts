/**
 * TODO:
 *
 * El archivo storage.ts  es un ejemplo de un controlador que permite a los usuarios cargar
 * archivos en un servidor Node.js. El controlador usa el siguiente flujo de trabajo:
 *
 * 1.Recibe una solicitud POST con el archivo a cargar.
 * 2.Valida la solicitud para asegurarse de que el archivo sea válido y que el usuario tenga permiso para cargarlo.
 * 3.Registra el archivo en la base de datos.
 * 4.Devuelve una respuesta con la información del archivo cargado.
 *
 * El controlador utiliza el servicio registerUpload() para registrar el archivo en la base de datos. Este servicio puede ser
 * implementado de diferentes maneras, pero típicamente implica guardar el archivo en un sistema de almacenamiento en la nube,
 * como Amazon S3 o Google Cloud Storage.
 *
 * El controlador también utiliza la función handleHttp() para manejar cualquier error que pueda ocurrir durante
 * el proceso de carga de archivos. Esta función puede ser implementada para devolver una respuesta de error
 * al usuario o para registrar el error en un sistema de monitoreo.
 *
 */

import { Request, Response } from "express";
import sequelize from "../db/connection";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";


const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile }
