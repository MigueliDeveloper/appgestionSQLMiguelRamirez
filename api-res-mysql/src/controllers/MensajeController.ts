import {Request, Response} from 'express';
import Mensaje from '../models/MensajeModel';

export const getMensajes =  async (req: Request, res: Response) => {
    const listMensajes = await Mensaje.findAll();
    res.json(listMensajes);
}

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
            msg: 'El mensjae fue eliminado con exito.',
        })
    }
}

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

export const updateMensaje = async (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;
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
            msg: 'Ha ocurrido un error'
         })
    }
}
