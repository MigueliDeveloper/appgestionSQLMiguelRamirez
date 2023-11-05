"use strict";
/**
 *
 * TODO:
 *
 * rchivo: user.ts
 *
 * Propósito: Este archivo define el modelo de datos para la tabla Usuario en la base de datos.
 *
 * Importaciones:
 *
 * DataTypes: El tipo de datos que representa los tipos de datos de Sequelize.
 * sequelize: La instancia de Sequelize que representa la conexión a la base de datos.
 * */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
/**
 *
 * TODO:
 *
 * User: El modelo de datos para la tabla Usuario.
 * Documentación detallada:
 *
 * El modelo de datos User define los siguientes campos:
 *
 * id: El campo id es el campo primario de la tabla Usuario. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * nombre: El campo nombre es un campo de tipo STRING que representa el nombre del usuario.
 * apellidos: El campo apellidos es un campo de tipo STRING que representa los apellidos del usuario.+
 * Fnacimiento: El campo Fnacimiento es un campo de tipo STRING que representa la fecha de nacimiento del usuario.
 * email: El campo email es un campo de tipo STRING que representa el correo electrónico del usuario. Este campo es único y no puede ser nulo.
 * password: El campo password es un campo de tipo STRING que representa la contraseña del usuario. Este campo no puede ser nulo.
 * telefono: El campo telefono es un campo de tipo STRING que representa el número de teléfono del usuario.
 * tipo: El campo tipo es un campo de tipo STRING que representa el tipo de usuario (por ejemplo, "Estudiante", "Profesor", "Administrador").
 *
 */
exports.User = connection_1.default.define('Usuario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    Fnacimiento: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    /**
     *
     * TODO:
     *
     * El modelo de datos User se define con las siguientes opciones de Sequelize:
     *
     * createdAt: false: Deshabilita la creación automática del campo createdAt.
     * updatedAt: false: Deshabilita la creación automática del campo updatedAt.
     */
    createdAt: false,
    updatedAt: false
});
