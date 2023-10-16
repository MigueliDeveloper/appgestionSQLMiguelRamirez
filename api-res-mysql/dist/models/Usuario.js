"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
class Usuario extends sequelize_1.Model {
    static initModel(sequelize) {
        Usuario.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(45)
            },
            apellidos: {
                type: sequelize_1.DataTypes.STRING(45)
            },
            fnacimiento: {
                type: sequelize_1.DataTypes.STRING(45)
            },
            email: {
                type: sequelize_1.DataTypes.STRING(45)
            },
            password: {
                type: sequelize_1.DataTypes.STRING(60)
            },
            telefono: {
                type: sequelize_1.DataTypes.STRING(60)
            },
            tipo: {
                type: sequelize_1.DataTypes.STRING(45)
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
        return Usuario;
    }
}
exports.Usuario = Usuario;
