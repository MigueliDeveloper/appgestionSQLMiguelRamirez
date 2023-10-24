import { Request, Response} from 'express';
import { User } from '../models/user'; 

export const getUsers = async (req: Request, res: Response) =>{
    const listUsers = await User.findAll();
    res.json(listUsers);
}

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