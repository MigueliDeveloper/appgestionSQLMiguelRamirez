import { Router } from 'express';
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea} from '../controllers/TareaController';
//import validateToken from '../routes/validate-token';

const router = Router();

router.get('/', getTareas);
router.get('/:id', getTarea);
router.delete('/:id', deleteTarea);
router.post('/', postTarea);
router.put('/:id', updateTarea);

export default router;

