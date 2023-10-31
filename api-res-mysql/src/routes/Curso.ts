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

import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso} from '../controllers/cursoController';

/** 
 * 
 * TODO: 
 * 
 * routerCurso: El objeto Router que contiene las rutas definidas en este archivo.
 * */
const routerCurso = Router();

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
routerCurso.get('/:id', getCurso);
routerCurso.get('/', getCursos);
routerCurso.delete('/:id', deleteCurso);
routerCurso.post('/', postCurso);
routerCurso.put('/:id', updateCurso);

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
export default routerCurso;