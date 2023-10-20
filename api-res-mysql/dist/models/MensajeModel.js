"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
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
    createdAt: false,
    updatedAt: false,
});
exports.default = Mensaje;
