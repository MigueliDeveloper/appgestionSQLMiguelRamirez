/** 
 * 
 * TODO: 
 * 
 * Archivo: storage.ts
 * 
 * Propósito: Este archivo define el modelo de datos para la tabla archivo en la base de datos.
 * 
 * Importaciones:
 * 
 * DataTypes: El tipo de datos que representa los tipos de datos de Sequelize.
 * sequelize: La instancia de Sequelize que representa la conexión a la base de datos.
 * 
 * 
 * */ 

import { DataTypes } from 'sequelize'
import sequelize from '../db/connection';


/** 
 * 
 * TODO:
 * 
 * Documentación detallada:
 * 
 * El modelo de datos Archivo define los siguientes campos:
 * 
 * id: El campo id es el campo primario de la tabla archivo. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * fileName: El campo fileName es un campo de tipo STRING que representa el nombre del archivo.
 * idUser: El campo idUser es un campo de tipo STRING que representa el ID del usuario que subió el archivo.
 * path: El campo path es un campo de tipo STRING que representa la ruta al archivo.
 * 
 * 
 */
const Archivo = sequelize.define('archivo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fileName: {
      type: DataTypes.STRING
    },
    idUser: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
  },
  {
    /**
     * timestamps: true: Habilita la creación automática de los campos createdAt y updatedAt.
     */
    timestamps: true,
  }
);

export default Archivo;