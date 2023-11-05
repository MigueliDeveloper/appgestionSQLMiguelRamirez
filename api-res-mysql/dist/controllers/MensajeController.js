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
exports.updateMensaje = exports.postMensaje = exports.deleteMensaje = exports.getMensaje = exports.getMensajes = void 0;
const MensajeModel_1 = __importDefault(require("../models/MensajeModel"));
/**
 *
 * TODO:
 *
 * Este código es un ejemplo de una API RESTful que permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre mensajes.
 *
 * Los cuatro métodos exportados son:
 * getMensajes(): Obtiene todos los mensajes.
 * getMensaje(): Obtiene un mensaje específico por su ID.
 * deleteMensaje(): Elimina un mensaje específico por su ID.
 * postMensaje(): Crea un nuevo mensaje.
 * updateMensaje(): Actualiza un mensaje existente.
 * Cada método usa la clase MensajeModel para interactuar con la base de datos.
 */
/**
 *
 * TODO:
 *
 * getMensajes()
 * Este método usa el método findAll() de la clase MensajeModel para obtener todos los mensajes de la base de datos.
 * Luego, el método json() de la clase Response se usa para serializar los mensajes en formato JSON y enviarlos
 * como respuesta a la solicitud.
 */
const getMensajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMensajes = yield MensajeModel_1.default.findAll();
    res.json(listMensajes);
});
exports.getMensajes = getMensajes;
/**
 *
 * TODO:
 * getMensaje()
 *
 * Este método usa el método findByPk() de la clase MensajeModel para obtener un
 * mensaje específico por su ID. Si el mensaje existe, el método json() de la clase Response se usa
 * para serializar el mensaje en formato JSON y enviarlo como respuesta a la solicitud. De lo contrario,
 * se envía un código de estado 404 (Not Found) como respuesta.
 */
const getMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const mensaje = yield MensajeModel_1.default.findByPk(id);
    if (mensaje) {
        res.json(mensaje);
    }
    else {
        res.status(404).json({
            msg: `No existe un mensaje con ese ${id}`
        });
    }
});
exports.getMensaje = getMensaje;
/**
 *
 * TODO:
 * deleteMensaje()
 *
 * Este método usa el método destroy() de la clase MensajeModel para eliminar un mensaje específico por su ID.
 * Si el mensaje existe, se envía un código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de estado
 * 404 (Not Found) como respuesta.
 *
 */
const deleteMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const mensaje = yield MensajeModel_1.default.findByPk(id);
    if (!mensaje) {
        res.json(404).json({
            msg: `No existe un mensaje con ese ${id}`
        });
    }
    else {
        yield mensaje.destroy();
        res.json({
            msg: 'El mensaje fue eliminado con exito.',
        });
    }
});
exports.deleteMensaje = deleteMensaje;
/**
 * postMensaje()
 *
 * Este método usa el método create() de la clase MensajeModel para crear un nuevo mensaje. El método body de la clase Request se usa
 * para obtener los datos del mensaje a crear. Luego, el método json() de la clase Response se usa para serializar el mensaje recién
 * creado en formato JSON y enviarlo como respuesta a la solicitud.
 *
 *
 */
const postMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield MensajeModel_1.default.create(body);
        res.json({
            msg: '¡El mensaje fue agregado con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurriod un error'
        });
    }
});
exports.postMensaje = postMensaje;
/**
 *
 * TODO:
 * updateMensaje()
 * Este método usa el método update() de la clase MensajeModel para actualizar un mensaje existente. El método body de la clase Request se
 * usa para obtener los datos del mensaje a actualizar. Si el mensaje existe, se envía un código de estado 200 (OK) como respuesta.
 * De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 */
const updateMensaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const mensaje = yield MensajeModel_1.default.findByPk(id);
        if (mensaje) {
            yield mensaje.update(body);
            res.json({
                msg: 'El mensaje fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un mensaje con ese ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.updateMensaje = updateMensaje;
