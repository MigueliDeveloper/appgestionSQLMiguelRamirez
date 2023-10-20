import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const AdminService = sequelize.define('adminservice',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
   
}, {
    createdAt: false,
    updatedAt: false
});
export default AdminService;