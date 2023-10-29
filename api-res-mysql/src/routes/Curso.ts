import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso} from '../controllers/cursoController';


const routerCurso = Router();

routerCurso.get('/:id', getCurso);
routerCurso.get('/', getCursos);
routerCurso.delete('/:id', deleteCurso);
routerCurso.post('/', postCurso);
routerCurso.put('/:id', updateCurso);

export default routerCurso;