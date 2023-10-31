/** 
 * 
 * TODO: 
 * 
 * Propósito: Este archivo define la conexión a la base de datos.
 * 
 * Sequelize: El paquete Sequelize para conectarnos a la base de datos MySQL.
 * 
 * La importación del paquete Sequelize permite que el archivo utilice las funciones y clases de este paquete para conectarnos a la base de datos.
 * */
import { Sequelize } from "sequelize";

/** 
 * 
 * TODO: 
 * 
 * Sequelize: Una instancia de la clase Sequelize que representa la conexión a la base de datos.
 * 
 * Variables:
 * 
 * La variable sequelize es una instancia de la clase Sequelize que representa la conexión a la base de datos. Esta variable se inicializa con los siguientes parámetros:
 * 
 * database: El nombre de la base de datos.
 * username: El nombre de usuario de la base de datos.
 * password: La contraseña de la base de datos.
 * host: La dirección del servidor de la base de datos.
 * dialect: El dialecto de la base de datos.
 * 
 * 
 * */
const sequelize = new Sequelize('appweb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',   
});

/** 
 * 
 * TODO: 
 * 
 * export default sequelize: Exporta la instancia de sequelize para que pueda ser utilizada por otros archivos.
 * */

export default sequelize;