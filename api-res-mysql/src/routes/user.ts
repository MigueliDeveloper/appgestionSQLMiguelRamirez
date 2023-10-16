import { Router } from 'express';
import { loginUser, newUser } from '../controllers/user';

const router = Router();

router.post('/registro', newUser);
router.post('/acceso', loginUser)

export default router;