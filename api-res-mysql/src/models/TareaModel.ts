import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Tarea = sequelize.define('tarea', {
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
    estado: {
        type: DataTypes.STRING,
    },
    nota: {
        type: DataTypes.INTEGER
    }
    
}, {

    modelName: "tarea",
    timestamps: false  

});

export default Tarea