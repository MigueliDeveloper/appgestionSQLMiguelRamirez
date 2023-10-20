import { Request, Response } from 'express';
import AdminService from '../models/AdminServiceModel';

export const getAdminServices = async (req: Request, res: Response) =>{
    const listAdminServices = await AdminService.findAll();
    res.json(listAdminServices);
}

export const getAdminService = async (req: Request, res: Response) => {
    const {id} = req.params;
    const adminservice = await AdminService.findByPk(id);
    if (adminservice) {
        res.json(adminservice)
    } else {
        res.status(404).json({
            msg: `No existe un servicio con ese ${id}`
        })
    }
}

export const deleteAdminService = async (req: Request, res: Response) => {
    const {id} = req.params;
    const adminservice = await AdminService.findByPk(id);
    if (!adminservice) {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        })   
    } else {
        await adminservice.destroy();
        res.json ({
            msg: 'El servicio fue eliminado con exito'
        })
    }
}

export const postAdminService = async (req: Request, res: Response) => {
    const {body} = req;
    try{
        await AdminService.create(body);
        res.json({
            msg: '¡El seervicio fue agregado con exito!'
        })
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        })
    }
}

export const updateAdminService = async (req: Request, res: Response) => {
    const {body} = req;
    const {id} = req.params;
    try{
        const adminservice = await AdminService.findByPk(id);
        if(adminservice){
            await adminservice.update(body);
            res.json({
                msg: 'El servicio fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe un servicio con ese ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        })
    }
}