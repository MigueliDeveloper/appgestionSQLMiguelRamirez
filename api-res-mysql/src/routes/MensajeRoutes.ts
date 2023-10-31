/** 
 * 
 * TODO:
 * 
 * Archivo: MensajeRoutes.ts
 * Propósito: Este archivo define las rutas para el manejo de mensajes.
 * 
 * Importaciones:
 * 
 * Router: El framework Express para crear rutas.
 * 
 * deleteMensaje: El controlador para eliminar un mensaje.
 * getMensaje: El controlador para obtener un mensaje.
 * getMensajes: El controlador para obtener todos los mensajes.
 * postMensaje: El controlador para crear un nuevo mensaje.
 * updateMensaje: El controlador para actualizar un mensaje.
 */
import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje} from '../controllers/MensajeController';
//import validateToken from '../routes/validate-token';

/**
 * router: El objeto Router que contiene las rutas definidas en este archivo.
 */
const router = Router();

/**
 * 
 * TODO:
 * 
 * El archivo MensajeRoutes.ts define las siguientes rutas:
 * 
 * /: Obtiene todos los mensajes.
 * /:id: Obtiene un mensaje por su ID.
 * /:id: Elimina un mensaje por su ID.
 * /: Crea un nuevo mensaje.
 * /:id: Actualiza un mensaje por su ID.
 * 
 */

router.get('/', getMensajes);
router.get('/:id', getMensaje);
router.delete('/:id', deleteMensaje);
router.post('/', postMensaje);
router.put('/:id', updateMensaje);

/**
 * 
 *  TODO: 
 * 
 * Para obtener todos los mensajes, se puede usar la siguiente ruta:
 * 
 * GET http://localhost:3001/api/mensajes
 * Para crear un nuevo mensaje, se puede usar la siguiente ruta:
 * 
 * POST http://localhost:3001/api/mensajes
 * El cuerpo de la solicitud POST debe contener los datos del mensaje que se desea crear.
 * */

export default router;
