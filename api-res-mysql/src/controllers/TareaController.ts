/**
 * TODO:
 *
 * El archivo TareaController.ts que permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre tareas.
 * El controlador usa el siguiente flujo de trabajo:
 * Recibe una solicitud HTTP con los datos de la tarea a realizar.
 * Valida los datos de la tarea para asegurarse de que sean válidos.
 * Realiza la operación CRUD correspondiente.
 * Devuelve una respuesta HTTP con el resultado de la operación.
 * El controlador utiliza la clase TareaModel para interactuar con la base de datos.
 */
import { Request, Response } from 'express';
import Tarea from '../models/TareaModel';


/**
 *
 * TODO:
 *
 * getTareas()
 *
 * Este método usa el método findAll() de la clase TareaModel para obtener todas las tareas de la base de datos.
 * Luego, el método json() de la clase Response se usa para serializar las tareas en formato JSON y enviarlas como respuesta a la solicitud.
 * */
export const getTareas =  async (req: Request, res: Response) => {
    const listTareas  = await Tarea .findAll();

    res.json(listTareas);
}

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
export const getTarea = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tarea = await Tarea.findByPk(id);
    if(tarea){
        res.json(tarea)

    }else {
        res.status(404).json({
            msg: `No existe un tarea con ese ${id}`,
        })
    }
}
/**
 *
 * TODO:
 *
 * deleteTarea()
 * Este método usa el método destroy() de la clase TareaModel para eliminar una tarea específica por su ID.
 * Si la tarea existe, se envía un código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de estado 404 (Not Found)
 * como respuesta.
 * */
export const deleteTarea = async (req: Request, res: Response) => {
    const {id} = req.params;
    const tarea = await Tarea.findByPk(id);
    if(!tarea){
        res.json(404).json({
            msg: `No existe una tarea con ese ${id}`
        })

    }else {
        await tarea.destroy();
        res.json({
            msg: 'La tarea fue eliminada con exito.',
        })
    }
}

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
export const postTarea = async (req: Request, res: Response) => {
    const {body} = req;

    try{
        await Tarea.create(body);
        res.json({

            msg: '¡La tarea fue agregado con exito!'

        })

    }catch (error){
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

}

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

export const updateTarea = async (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    try{
        const tarea = await Tarea.findByPk(id);

        if(tarea){
            await tarea.update(body);
            res.json({
                msg: 'La tarea fue actualizado con exito'

            })
        }else{
            res.status(404).json({
                msg: `No existe una tarea con ese ${id}`
            })
        }
    } catch (error){
         console.log(error);
         res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
         })
    }
}
