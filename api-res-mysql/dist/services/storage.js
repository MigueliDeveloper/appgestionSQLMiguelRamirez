"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUpload = void 0;
const storage_1 = __importDefault(require("../models/storage"));
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
const registerUpload = ({ fileName, idUser, path }) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield storage_1.default.create({ fileName, idUser, path });
    return responseItem;
});
exports.registerUpload = registerUpload;
