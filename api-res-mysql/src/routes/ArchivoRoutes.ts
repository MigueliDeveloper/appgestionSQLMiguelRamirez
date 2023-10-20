import  { Router } from 'express'
import { getArchivo } from '../controllers/ArchivoController';

const routerarchivos = Router();

routerarchivos.post('/cursos/', getArchivo);