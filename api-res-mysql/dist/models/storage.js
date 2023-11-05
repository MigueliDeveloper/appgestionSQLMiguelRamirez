"use strict";
/**
 *
 * TODO:
 *
 * Archivo: storage.ts
 *
 * Propósito: Este archivo define el modelo de datos para la tabla archivo en la base de datos.
 *
 * Importaciones:
 *
 * DataTypes: El tipo de datos que representa los tipos de datos de Sequelize.
 * sequelize: La instancia de Sequelize que representa la conexión a la base de datos.
 *
 *
 * */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
/**
 *
 * TODO:
 *
 * Documentación detallada:
 *
 * El modelo de datos Archivo define los siguientes campos:
 *
 * id: El campo id es el campo primario de la tabla archivo. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * fileName: El campo fileName es un campo de tipo STRING que representa el nombre del archivo.
 * idUser: El campo idUser es un campo de tipo STRING que representa el ID del usuario que subió el archivo.
 * path: El campo path es un campo de tipo STRING que representa la ruta al archivo.
 *
 *
 */
const Archivo = connection_1.default.define('archivo', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fileName: {
        type: sequelize_1.DataTypes.STRING
    },
    idUser: {
        type: sequelize_1.DataTypes.STRING
    },
    path: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    /**
     * timestamps: true: Habilita la creación automática de los campos createdAt y updatedAt.
     */
    timestamps: true,
});
exports.default = Archivo;
