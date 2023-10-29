/**
 *
 * TODO:
 *
 * El archivo user.ts que me has proporcionado es un ejemplo de un controlador que permite realizar
 * operaciones CRUD (Create, Read, Update, Delete) sobre usuarios.
 * El controlador usa el siguiente flujo de trabajo:
 *
 * 1. Recibe una solicitud HTTP con los datos del usuario a realizar.
 * 2. Valida los datos del usuario para asegurarse de que sean válidos.
 * 3. Realiza la operación CRUD correspondiente.
 * 4. Devuelve una respuesta HTTP con el resultado de la operación.
 *
 * El controlador utiliza la clase User para interactuar con la base de datos.
 ***/
import { Request, Response} from 'express';
import { User } from '../models/user';

/**
 *
 * TODO:
 *
 * getUsers()
 * Este método usa el método findAll() de la clase User para obtener todos los usuarios de la base de datos.
 * Luego, el método json() de la clase Response se usa para serializar los usuarios en formato JSON y enviarlos como respuesta a la solicitud.
 *
 * */
export const getUsers = async (req: Request, res: Response) =>{
    const listUsers = await User.findAll();
    res.json(listUsers);
}

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
export const getCurso = async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        })
    }
}

/**
 * TODO:
 *
 * deleteCurso()
 *
 * Este método usa el método destroy() de la clase User para eliminar un usuario específico por su ID.
 * Si el usuario existe, se envía un código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de
 * estado 404 (Not Found) como respuesta.
 * */
export const deleteCurso = async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        })
    } else {
        await user.destroy();
        res.json ({
            msg: 'El curso fue eliminado con exito'
        })
    }
}

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
export const updateCurso = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try{
        const user = await User.findByPk(id);
        if(user){
            await user.update(body);
            res.json({
                msg: 'El curso fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe un curso con ese ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        })
    }
}
