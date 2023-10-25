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
