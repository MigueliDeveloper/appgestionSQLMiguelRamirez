
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

  export const Curso = sequelize.define('curso',{
  
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        nombre: {
          type: DataTypes.STRING(60)
        },
        temas: {
          type: DataTypes.TEXT
        },
        descripcion: {
          type: DataTypes.STRING(80)
        },
        categoria: {
          type: DataTypes.STRING(60)
        },
        duracion: {
          type: DataTypes.STRING(60)
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      },)

export default Curso;
