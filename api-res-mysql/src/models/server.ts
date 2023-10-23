import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user';
import { routerFile } from '../routes/storage';
import routerCurso from '../routes/Curso';
import routerTarea from '../routes/TareaRoutes';
import routerMensaje from '../routes/MensajeRoutes';
import { User } from './user';
import  Archivo  from './storage';
import {Curso} from './CursoModel';
import TareaModel from './TareaModel';
import MensajeModel from './MensajeModel';

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
        this.app.use('/api/upload', routerFile);
        this.app.use('/api/curso', routerCurso);
        this.app.use('/api/tarea', routerTarea);
        this.app.use('/api/mensaje', routerMensaje);
    }

    middlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
           await Curso.sync();
           await TareaModel.sync();
           await MensajeModel.sync();
           await User.sync();
           await Archivo.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;