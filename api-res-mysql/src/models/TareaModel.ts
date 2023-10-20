import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Tarea = sequelize.define('Tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING, 
    },
    puntuacion: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    },
    importancia: {
        type: DataTypes.STRING,
    },
    
}, {

    createdAt: false,
    updatedAt: false,

});

export default Tarea