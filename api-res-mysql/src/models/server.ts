/** 
 * 
 * TODO:
 * 
 * Importaciones:
 * 
 * express: El framework Express para crear aplicaciones web.
 * cors: Un paquete para habilitar el CORS (Cross-Origin Resource Sharing).
 * routesUser: Un módulo que define las rutas para el manejo de usuarios.
 * routerFile: Un módulo que define las rutas para el manejo de archivos.
 * routerCurso: Un módulo que define las rutas para el manejo de cursos.
 * routerTarea: Un módulo que define las rutas para el manejo de tareas.
 * routerMensaje: Un módulo que define las rutas para el manejo de mensajes.
 * routerPost: Un módulo que define las rutas para el manejo de posts.
 * User: El modelo de datos para los usuarios.
 * Archivo: El modelo de datos para los archivos.
 * Curso: El modelo de datos para los cursos.
 * TareaModel: El modelo de datos para las tareas.
 * MensajeModel: El modelo de datos para los mensajes.
 * Post: El modelo de datos para los posts.
 * 
 */
import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user';
import { routerFile } from '../routes/storage';
import routerCurso from '../routes/Curso';
import routerTarea from '../routes/TareaRoutes';
import routerMensaje from '../routes/MensajeRoutes';
import routerPost from '../routes/PostRoutes';
import { User } from './user';
import  Archivo  from './storage';
import {Curso} from './CursoModel';
import TareaModel from './TareaModel';
import MensajeModel from './MensajeModel';
import Post from './PostModel';

/** 
 * 
 * TODO: 
 * 
 * Clase Server:
 * 
 * La clase Server representa el servidor Node.js. Esta clase tiene las siguientes propiedades y métodos:
 * 
 * app: Una instancia de Express que representa la aplicación web.
 * port: El puerto en el que se ejecuta el servidor.
 * constructor(): El constructor de la clase Server. Inicializa las propiedades app y port.
 * listen(): Inicia el servidor Node.js en el puerto especificado en la propiedad port.
 * routes(): Define las rutas de la aplicación web.
 * middlewares(): Define los middlewares de la aplicación web.
 * dbConnect(): Conecta la aplicación web a la base de datos.
 * 
 */
class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/users', routesUser);
        this.app.use('/api/cursos', routerCurso);
        this.app.use('/api/mensajes', routerMensaje);
        this.app.use('/api/posts', routerPost)
        this.app.use('/api/tareas', routerTarea);
        this.app.use('/api/upload', routerFile);
    }

    middlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
          await User.sync();
          await Curso.sync();
          await MensajeModel.sync();
          await Post.sync();
          await TareaModel.sync();
          await Archivo.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;
