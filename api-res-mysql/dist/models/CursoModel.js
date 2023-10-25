"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Curso = connection_1.default.define('curso', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(60)
    },
    temas: {
        type: sequelize_1.DataTypes.TEXT
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(80)
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING(60)
    },
    duracion: {
        type: sequelize_1.DataTypes.STRING(60)
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = exports.Curso;
