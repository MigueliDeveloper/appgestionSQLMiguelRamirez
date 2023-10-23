import { Router } from 'express'
import { deleteAdminService, getAdminServices, getAdminService, postAdminService, updateAdminService } from '../controllers/AdminServiceController'
import validateToken from '../routes/validate-token';

const router = Router();

router.get('/', validateToken, getAdminServices);
router.get('/:id', validateToken, getAdminService);
router.delete('/:id', validateToken, deleteAdminService);
router.post('/', validateToken, postAdminService);
router.put('/:id', validateToken, updateAdminService);

export default router;
