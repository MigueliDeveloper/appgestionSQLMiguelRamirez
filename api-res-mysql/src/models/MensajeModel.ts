import { DataTypes } from "sequelize";
import sequelize from '../db/connection';

const Mensaje = sequelize.define('Mensaje', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    remite: {
        type: DataTypes.STRING,
    },
    mail: {
        type: DataTypes.STRING, 

    },
    asunto: {
        type: DataTypes.STRING,
    },
    mensaje: {
        type: DataTypes.STRING,
    },
    fecha_envio: {
        type: DataTypes.STRING,
    },

}, {

    createdAt: false,
    updatedAt: false,

});

export default Mensaje