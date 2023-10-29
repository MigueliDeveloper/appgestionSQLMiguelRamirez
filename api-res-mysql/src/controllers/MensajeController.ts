import {Request, Response} from 'express';
import Mensaje from '../models/MensajeModel';

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
export const getMensajes =  async (req: Request, res: Response) => {
    const listMensajes = await Mensaje.findAll();
    res.json(listMensajes);
}

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

export const getMensaje = async (req: Request, res: Response) => {
    const {id} = req.params;
    const mensaje = await Mensaje.findByPk(id);
    if(mensaje){
        res.json(mensaje)

    }else {
        res.status(404).json({
            msg: `No existe un mensaje con ese ${id}`

        })
    }
}

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
export const deleteMensaje = async (req: Request, res: Response) => {
    const {id} = req.params;
    const mensaje = await Mensaje.findByPk(id);
    if(!mensaje){
        res.json(404).json({
            msg: `No existe un mensaje con ese ${id}`
        })

    }else {
        await mensaje.destroy();
        res.json({
            msg: 'El mensaje fue eliminado con exito.',
        })
    }
}

/**
 * postMensaje()
 *
 * Este método usa el método create() de la clase MensajeModel para crear un nuevo mensaje. El método body de la clase Request se usa
 * para obtener los datos del mensaje a crear. Luego, el método json() de la clase Response se usa para serializar el mensaje recién
 * creado en formato JSON y enviarlo como respuesta a la solicitud.
 *
 *
 */

export const postMensaje = async (req: Request, res: Response) => {
    const {body} = req;

    try{
        await Mensaje.create(body);
        res.json({

            msg: '¡El mensaje fue agregado con exito!'

        })

    }catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurriod un error'
        })
    }
}

/**
 *
 * TODO:
 * updateMensaje()
 * Este método usa el método update() de la clase MensajeModel para actualizar un mensaje existente. El método body de la clase Request se
 * usa para obtener los datos del mensaje a actualizar. Si el mensaje existe, se envía un código de estado 200 (OK) como respuesta.
 * De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 */
export const updateMensaje = async (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    try{
        const mensaje = await Mensaje.findByPk(id);

        if(mensaje){
            await mensaje.update(body);
            res.json({
                msg: 'El mensaje fue actualizado con exito'

            })
        }else{
            res.status(404).json({
                msg: `No existe un mensaje con ese ${id}`
            })
        }
    } catch (error){
         console.log(error);
         res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
         })
    }
}
