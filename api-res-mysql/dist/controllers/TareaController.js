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
exports.updateTarea = exports.postTarea = exports.deleteTarea = exports.getTarea = exports.getTareas = void 0;
const TareaModel_1 = __importDefault(require("../models/TareaModel"));
/**
 *
 * TODO:
 *
 * getTareas()
 *
 * Este método usa el método findAll() de la clase TareaModel para obtener todas las tareas de la base de datos.
 * Luego, el método json() de la clase Response se usa para serializar las tareas en formato JSON y enviarlas como respuesta a la solicitud.
 * */
const getTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listTareas = yield TareaModel_1.default.findAll();
    res.json(listTareas);
});
exports.getTareas = getTareas;
/**
 *
 * TODO:
 *
 * getTarea()
 *
 * Este método usa el método findByPk() de la clase TareaModel para obtener una tarea específica por su ID.
 * Si la tarea existe, el método json() de la clase Response se usa para serializar la tarea en formato JSON y
 * enviarla como respuesta a la solicitud. De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 */
const getTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield TareaModel_1.default.findByPk(id);
    if (tarea) {
        res.json(tarea);
    }
    else {
        res.status(404).json({
            msg: `No existe un tarea con ese ${id}`,
        });
    }
});
exports.getTarea = getTarea;
/**
 *
 * TODO:
 *
 * deleteTarea()
 * Este método usa el método destroy() de la clase TareaModel para eliminar una tarea específica por su ID.
 * Si la tarea existe, se envía un código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de estado 404 (Not Found)
 * como respuesta.
 * */
const deleteTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield TareaModel_1.default.findByPk(id);
    if (!tarea) {
        res.json(404).json({
            msg: `No existe una tarea con ese ${id}`
        });
    }
    else {
        yield tarea.destroy();
        res.json({
            msg: 'La tarea fue eliminada con exito.',
        });
    }
});
exports.deleteTarea = deleteTarea;
/**
 *
 * TODO:
 *
 * postTarea()
 * Este método usa el método create() de la clase TareaModel para crear una nueva tarea.
 * El método body de la clase Request se usa para obtener los datos de la tarea a crear. Luego, el método json() de la
 * clase Response se usa para serializar la tarea recién creada en formato JSON y enviarla como respuesta a la solicitud.
 *
 *
 * */
const postTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield TareaModel_1.default.create(body);
        res.json({
            msg: '¡La tarea fue agregado con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.postTarea = postTarea;
/**
 *
 * TODO:
 *
 * updateTarea()
 *
 * Este método usa el método update() de la clase TareaModel para actualizar una tarea existente.
 *
 * El método body de la clase Request se usa para obtener los datos de la tarea a actualizar. Si la tarea existe, se envía un
 * código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 * */
const updateTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const tarea = yield TareaModel_1.default.findByPk(id);
        if (tarea) {
            yield tarea.update(body);
            res.json({
                msg: 'La tarea fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una tarea con ese ${id}`
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
exports.updateTarea = updateTarea;
