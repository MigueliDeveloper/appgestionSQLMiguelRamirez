"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
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
    timestamps: true,
});
exports.default = Archivo;
