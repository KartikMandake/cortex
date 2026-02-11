import { Router } from 'express';
import { patientController } from '../controllers/patient.controller';

const router = Router();

router.post('/login', patientController.login);
router.get('/:aadhaar', patientController.getPatient);
router.put('/:aadhaar', patientController.updatePatient);

export default router;
