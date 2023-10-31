/** 
 * 
 * TODO: 
 * 
 * rchivo: user.ts
 * 
 * Propósito: Este archivo define el modelo de datos para la tabla Usuario en la base de datos.
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
 * User: El modelo de datos para la tabla Usuario.
 * Documentación detallada:
 * 
 * El modelo de datos User define los siguientes campos:
 * 
 * id: El campo id es el campo primario de la tabla Usuario. Es un campo de tipo INTEGER que se incrementa automáticamente.
 * nombre: El campo nombre es un campo de tipo STRING que representa el nombre del usuario.
 * apellidos: El campo apellidos es un campo de tipo STRING que representa los apellidos del usuario.+
 * Fnacimiento: El campo Fnacimiento es un campo de tipo STRING que representa la fecha de nacimiento del usuario.
 * email: El campo email es un campo de tipo STRING que representa el correo electrónico del usuario. Este campo es único y no puede ser nulo.
 * password: El campo password es un campo de tipo STRING que representa la contraseña del usuario. Este campo no puede ser nulo.
 * telefono: El campo telefono es un campo de tipo STRING que representa el número de teléfono del usuario.
 * tipo: El campo tipo es un campo de tipo STRING que representa el tipo de usuario (por ejemplo, "Estudiante", "Profesor", "Administrador").
 * 
 */
export const User = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    Fnacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    }
}, {

    /** 
     * 
     * TODO: 
     * 
     * El modelo de datos User se define con las siguientes opciones de Sequelize:
     * 
     * createdAt: false: Deshabilita la creación automática del campo createdAt.
     * updatedAt: false: Deshabilita la creación automática del campo updatedAt.
     */
    createdAt: false,
    updatedAt: false
}
 )