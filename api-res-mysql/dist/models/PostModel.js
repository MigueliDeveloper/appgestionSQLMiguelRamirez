"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
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
    modelName: "post",
    timestamps: false
});
exports.default = Post;
