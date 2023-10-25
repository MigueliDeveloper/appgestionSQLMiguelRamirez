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
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.User.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
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
