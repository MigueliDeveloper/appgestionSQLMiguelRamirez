"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const sequelize_1 = require("sequelize");
class Curso extends sequelize_1.Model {
    static initModel(sequelize) {
        Curso.init({
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
        }, {
            sequelize
        });
        return Curso;
    }
}
exports.Curso = Curso;
