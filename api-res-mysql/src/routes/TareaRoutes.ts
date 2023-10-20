import { Router } from 'express';
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea} from '../controllers/TareaController';
import validateToken from '../services/validate-token';

const router = Router();

router.get('/', validateToken, getTareas);
router.get('/:id', validateToken, getTarea);
router.delete('/:id', validateToken, deleteTarea);
router.post('/', validateToken, postTarea);
router.put('/:id', validateToken, updateTarea);

export default router;

