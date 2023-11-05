"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
const storage_1 = require("../services/storage");
const error_handle_1 = require("../utils/error.handle");
const getFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, file } = req;
        const dataToRegister = {
            fileName: `${file === null || file === void 0 ? void 0 : file.filename}`,
            idUser: `${user === null || user === void 0 ? void 0 : user.id}`,
            path: `${file === null || file === void 0 ? void 0 : file.path}`,
        };
        const response = yield (0, storage_1.registerUpload)(dataToRegister);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOG");
    }
});
exports.getFile = getFile;
