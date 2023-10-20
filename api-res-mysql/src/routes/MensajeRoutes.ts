import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje} from '../controllers/MensajeController';
import validateToken from '../services/validate-token';

const router = Router();

router.get('/', validateToken, getMensajes);
router.get('/:id', validateToken, getMensaje);
router.delete('/:id', validateToken, deleteMensaje);
router.post('/', validateToken, postMensaje);
router.put('/:id', validateToken, updateMensaje);

export default router;
