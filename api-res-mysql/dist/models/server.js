"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("../routes/user"));
const storage_1 = require("../routes/storage");
const Curso_1 = __importDefault(require("../routes/Curso"));
const TareaRoutes_1 = __importDefault(require("../routes/TareaRoutes"));
const MensajeRoutes_1 = __importDefault(require("../routes/MensajeRoutes"));
const PostRoutes_1 = __importDefault(require("../routes/PostRoutes"));
const user_2 = require("./user");
const storage_2 = __importDefault(require("./storage"));
const CursoModel_1 = require("./CursoModel");
const TareaModel_1 = __importDefault(require("./TareaModel"));
const MensajeModel_1 = __importDefault(require("./MensajeModel"));
const PostModel_1 = __importDefault(require("./PostModel"));
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
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/cursos', Curso_1.default);
        this.app.use('/api/mensajes', MensajeRoutes_1.default);
        this.app.use('/api/posts', PostRoutes_1.default);
        this.app.use('/api/tareas', TareaRoutes_1.default);
        this.app.use('/api/upload', storage_1.routerFile);
    }
    middlewares() {
        // Parseo body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_2.User.sync();
                yield CursoModel_1.Curso.sync();
                yield MensajeModel_1.default.sync();
                yield PostModel_1.default.sync();
                yield TareaModel_1.default.sync();
                yield storage_2.default.sync();
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.default = Server;
