/** 
 * 
 * TODO: 
 * 
 * Archivo: TareaModel.ts
 * 
 * Propósito: Este archivo define el modelo de datos para la tabla tarea en la base de datos.
 * 
 * Importaciones:
 * 
 * DataTypes: El tipo de datos que representa los tipos de datos de Sequelize.
 * sequelize: La instancia de Sequelize que representa la conexión a la base de datos.
 * 
 * */

import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

/** 
 * 
 * TODO: 
 * 
 * El modelo de datos Tarea define los siguientes campos:
 * 
 * id: El campo id es el campo primario de la tabla tarea. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * nombre: El campo nombre es un campo de tipo STRING que representa el nombre de la tarea.
 * descripcion: El campo descripcion es un campo de tipo STRING que representa la descripción de la tarea.
 * estado: El campo estado es un campo de tipo STRING que representa el estado de la tarea (por ejemplo, "Pendiente", "En progreso", "Terminada").
 * nota: El campo nota es un campo de tipo INTEGER que representa la nota de la tarea (opcional).
 */
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

    /**
     * 
     * TODO: 
     * 
     * modelName: tarea: Establece el nombre de la tabla a la que se mapea el modelo de datos.
     * timestamps: false: Deshabilita la creación automática de los campos createdAt y updatedAt.
     * */

    modelName: "tarea",
    timestamps: false  

});

export default Tarea