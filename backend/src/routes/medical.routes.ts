import { Router } from 'express';
import { medicalController } from '../controllers/medical.controller';

const router = Router();

router.post('/login', medicalController.login);
router.get('/patients', medicalController.getPatients);

export default router;
