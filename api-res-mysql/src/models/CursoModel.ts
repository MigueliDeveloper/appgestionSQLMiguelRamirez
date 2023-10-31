/** 
 * 
 * TODO: 
 * 
 * Archivo: CursoModel.ts
 * 
 * Propósito: Este archivo define el modelo de datos para la tabla curso en la base de datos.
 * 
 * 
 * Importaciones:
 * 
 * DataTypes: El tipo de datos que representa los tipos de datos de Sequelize.
 * sequelize: La instancia de Sequelize que representa la conexión a la base de datos.
 * */

import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

  /** 
   * 
   * TODO: 
   * 
   * Exportaciones:
   * 
   * Curso: El modelo de datos para la tabla curso.
   * 
   * Documentación detallada:
   * 
   * El modelo de datos Curso define los siguientes campos:
   * 
   * id: El campo id es el campo primario de la tabla curso. Es un campo de tipo INTEGER que se incrementa automáticamente.
   * nombre: El campo nombre es un campo de tipo STRING(60) que representa el nombre del curso.
   * temas: El campo temas es un campo de tipo TEXT que representa los temas del curso.
   * descripcion: El campo descripcion es un campo de tipo STRING(80) que representa la descripción del curso.
   * categoria: El campo categoria es un campo de tipo STRING(60) que representa la categoría del curso.
   * duracion: El campo duracion es un campo de tipo STRING(60) que representa la duración del curso.
   * createdAt: El campo createdAt es un campo de tipo DATE que representa la fecha y hora en que se creó el curso.
   * updatedAt: El campo updatedAt es un campo de tipo DATE que representa la fecha y hora en que se actualizó el curso.
   * 
   */
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
