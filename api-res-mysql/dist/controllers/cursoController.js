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
exports.updateCurso = exports.postCurso = exports.deleteCurso = exports.getCurso = exports.getCursos = void 0;
const CursoModel_1 = require("../models/CursoModel");
// TODO: Método: GET
// Propósito: Obtener todos los cursos de la base de datos.
// Argumentos:
// Ninguno
// Valor de retorno:
// Un array de objetos Curso 
const getCursos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCursos = yield CursoModel_1.Curso.findAll();
    res.json(listCursos);
});
exports.getCursos = getCursos;
const getCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // TODO: Obtener todos los cursos
    const curso = yield CursoModel_1.Curso.findByPk(id);
    if (curso) {
        res.json(curso);
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
    const curso = yield CursoModel_1.Curso.findByPk(id);
    if (!curso) {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        });
    }
    else {
        yield curso.destroy();
        res.json({
            msg: 'El curso fue eliminado con exito'
        });
    }
});
exports.deleteCurso = deleteCurso;
const postCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield CursoModel_1.Curso.create(body);
        res.json({
            msg: '¡El curso fue agregado con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.postCurso = postCurso;
const updateCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        // Obtener un curso específico por su ID
        const curso = yield CursoModel_1.Curso.findByPk(id);
        if (curso) {
            yield curso.update(body);
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
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.updateCurso = updateCurso;
