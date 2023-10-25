import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje} from '../controllers/MensajeController';
//import validateToken from '../routes/validate-token';

const router = Router();

router.get('/', getMensajes);
router.get('/:id', getMensaje);
router.delete('/:id', deleteMensaje);
router.post('/', postMensaje);
router.put('/:id', updateMensaje);

export default router;
