import {Request, Response} from 'express';
import { Curso } from '../models/CursoModel';

// TODO: Método: GET
// Propósito: Obtener todos los cursos de la base de datos.
// Argumentos:
// Ninguno
// Valor de retorno:
// Un array de objetos Curso 


export const getCursos = async (req: Request, res: Response) =>{
    const listCursos = await Curso.findAll();
    res.json(listCursos);
}

export const getCurso = async (req: Request, res: Response) => {
    const {id} = req.params;

    // TODO: Obtener todos los cursos
    const curso = await Curso.findByPk(id);
    if (curso) {
        res.json(curso)
    } else {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        })
    }
}
export const deleteCurso = async (req: Request, res: Response) => {
    const {id} = req.params;
    const curso = await Curso.findByPk(id);
    if (!curso) {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        })   
    } else {
        await curso.destroy();
        res.json ({
            msg: 'El curso fue eliminado con exito'
        })
    }
}
export const postCurso = async (req: Request, res: Response) => {
    const {body} = req;
    try{
        await Curso.create(body);
        res.json({
            msg: '¡El curso fue agregado con exito!'
        })
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        })
    }
}
export const updateCurso = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try{

        // Obtener un curso específico por su ID
        const curso = await Curso.findByPk(id);

        if(curso){
            await curso.update(body);
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
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}