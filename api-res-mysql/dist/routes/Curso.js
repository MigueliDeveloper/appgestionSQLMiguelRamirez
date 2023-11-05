"use strict";
/**
 *
 * TODO:
 *
 * Archivo: Curso.ts
 *
 * Propósito: Este archivo define las rutas para el manejo de cursos.
 *
 * Importaciones:
 *
 * Router: El framework Express para crear rutas.deleteCurso: El controlador para eliminar un curso.
 * getCurso: El controlador para obtener un curso.
 * getCursos: El controlador para obtener todos los cursos.
 * postCurso: El controlador para crear un nuevo curso.
 * updateCurso: El controlador para actualizar un curso.*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursoController_1 = require("../controllers/cursoController");
/**
 *
 * TODO:
 *
 * routerCurso: El objeto Router que contiene las rutas definidas en este archivo.
 * */
const routerCurso = (0, express_1.Router)();
/**
 *
 * TODO:
 *
 * El archivo Curso.ts define las siguientes rutas:
 *
 * /:id: Obtiene un curso por su ID.
 * /: Obtiene todos los cursos.
 * /:id: Elimina un curso por su ID.
 * /: Crea un nuevo curso.
 * /:id: Actualiza un curso por su ID. */
routerCurso.get('/:id', cursoController_1.getCurso);
routerCurso.get('/', cursoController_1.getCursos);
routerCurso.delete('/:id', cursoController_1.deleteCurso);
routerCurso.post('/', cursoController_1.postCurso);
routerCurso.put('/:id', cursoController_1.updateCurso);
/**
 *
 * TODO:
 *
 * Cada ruta está asociada a un controlador que implementa la lógica para la operación correspondiente.
 *
 * Ejemplo:
 *
 * Para obtener todos los cursos, se puede usar la siguiente ruta:
 *
 * GET http://localhost:3001/api/cursos
 * Para crear un nuevo curso, se puede usar la siguiente ruta:
 *
 * POST http://localhost:3001/api/cursos
 * El cuerpo de la solicitud POST debe contener los datos del curso que se desea crear.
 */
exports.default = routerCurso;
