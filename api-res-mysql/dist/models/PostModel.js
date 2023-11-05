"use strict";
/**
 *
 * TODO:
 *
 * Archivo: PostModel.ts
 *
 * Propósito: Este archivo define el modelo de datos para la tabla Post en la base de datos.
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
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
/**
 *
 * TODO:
 *
 * Post: El modelo de datos para la tabla Post.
 *
 * Documentación detallada:
 *
 * El modelo de datos Post define los siguientes campos:
 *
 * id: El campo id es el campo primario de la tabla Post. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * titulo: El campo titulo es un campo de tipo STRING que representa el título del post.
 * fuente: El campo fuente es un campo de tipo STRING que representa la fuente del post.
 * texto: El campo texto es un campo de tipo TEXT que representa el texto del post.
 * imagen: El campo imagen es un campo de tipo STRING que representa la ruta a la imagen del post.
 * autor: El campo autor es un campo de tipo STRING que representa el nombre del autor del post.
 *
 */
const Post = connection_1.default.define('Post', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING
    },
    fuente: {
        type: sequelize_1.DataTypes.STRING
    },
    texto: {
        type: sequelize_1.DataTypes.TEXT
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    autor: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    /**
     *
     * TODO:
     *
     * modelName: post: Establece el nombre de la tabla a la que se mapea el modelo de datos.
     * timestamps: false: Deshabilita la creación automática de los campos createdAt y updatedAt.
     * */
    modelName: "post",
    timestamps: false
});
exports.default = Post;
