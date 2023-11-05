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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCurso = exports.deleteCurso = exports.getCurso = exports.getUsers = void 0;
const user_1 = require("../models/user");
/**
 *
 * TODO:
 *
 * getUsers()
 * Este método usa el método findAll() de la clase User para obtener todos los usuarios de la base de datos.
 * Luego, el método json() de la clase Response se usa para serializar los usuarios en formato JSON y enviarlos como respuesta a la solicitud.
 *
 * */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.User.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
/**
 *
 * TODO:
 *
 * getCurso()
 *
 * Este método usa el método findByPk() de la clase User para obtener un usuario específico por su ID.
 * Si el usuario existe, el método json() de la clase Response se usa para serializar al usuario en formato JSON y
 * enviarlo como respuesta a la solicitud. De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 *
 * */
const getCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.User.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        });
    }
});
exports.getCurso = getCurso;
/**
 * TODO:
 *
 * deleteCurso()
 *
 * Este método usa el método destroy() de la clase User para eliminar un usuario específico por su ID.
 * Si el usuario existe, se envía un código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de
 * estado 404 (Not Found) como respuesta.
 * */
const deleteCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.User.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        });
    }
    else {
        yield user.destroy();
        res.json({
            msg: 'El curso fue eliminado con exito'
        });
    }
});
exports.deleteCurso = deleteCurso;
/**
 *
 * TODO:
 *
 * updateCurso()
 * Este método usa el método update() de la clase User para actualizar un usuario existente.
 * El método body de la clase Request se usa para obtener los datos del usuario a actualizar.
 * Si el usuario existe, se envía un código de estado 200 (OK) como respuesta.
 * De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 *
 * */
const updateCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield user_1.User.findByPk(id);
        if (user) {
            yield user.update(body);
            res.json({
                msg: 'El curso fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un curso con ese ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.updateCurso = updateCurso;
