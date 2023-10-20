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
const getMensajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMensajes = yield MensajeModel_1.default.findAll();
    res.json(listMensajes);
});
exports.getMensajes = getMensajes;
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
            msg: 'El mensjae fue eliminado con exito.',
        });
    }
});
exports.deleteMensaje = deleteMensaje;
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
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.updateMensaje = updateMensaje;
