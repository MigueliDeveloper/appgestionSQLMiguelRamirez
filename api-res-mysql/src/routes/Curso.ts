import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso} from '../controllers/cursoController';


const router = Router();

router.get('/', getCurso);
router.get('/:id', getCursos);
router.delete('/:id', deleteCurso);
router.post('/', postCurso);
router.put('/:id', updateCurso);

export default router;