"use strict";
/**
 *
 * TODO:
 *
 * Archivo: MensajeModel.ts
 *
 * Propósito: Este archivo define el modelo de datos para la tabla Mensaje en la base de datos.
 *
 * Importaciones:
 * DataTypes: El tipo de datos que representa los tipos de datos de Sequelize.
 * sequelize: La instancia de Sequelize que representa la conexión a la base de datos.
 */
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
 * Exportaciones:
 * Mensaje: El modelo de datos para la tabla Mensaje.
 * Documentación detallada:
 *
 * El modelo de datos Mensaje define los siguientes campos:
 *
 * id: El campo id es el campo primario de la tabla Mensaje. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * remite: El campo remite es un campo de tipo STRING que representa el nombre del remitente del mensaje.
 * mail: El campo mail es un campo de tipo STRING que representa el correo electrónico del remitente del mensaje.
 * asunto: El campo asunto es un campo de tipo STRING que representa el asunto del mensaje.
 * mensaje: El campo mensaje es un campo de tipo STRING que representa el contenido del mensaje.
 * fecha_envio: El campo fecha_envio es un campo de tipo STRING que representa la fecha y hora en que se envió el mensaje.
 *
 */
const Mensaje = connection_1.default.define('Mensaje', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    remite: {
        type: sequelize_1.DataTypes.STRING,
    },
    mail: {
        type: sequelize_1.DataTypes.STRING,
    },
    asunto: {
        type: sequelize_1.DataTypes.STRING,
    },
    mensaje: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha_envio: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    /**
     *
     * TODO:
     *
     * Opciones Sequelize:
     * El modelo de datos Mensaje se define con las siguientes opciones de Sequelize:
     *
     * createdAt: false: Deshabilita la creación automática del campo createdAt.
     * updatedAt:
     *
     * */
    createdAt: false,
    updatedAt: false,
});
exports.default = Mensaje;
