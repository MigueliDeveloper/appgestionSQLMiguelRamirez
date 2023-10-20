import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Archivo = sequelize.define('Archivo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    filename:{
        type: DataTypes.STRING

    },

    iduser:{
        type: DataTypes.STRING
    },

    path:{
        type: DataTypes.STRING

    },

}, {
    createdAt: false,
    updatedAt: false

});

export default Archivo;