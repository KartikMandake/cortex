import { Router } from 'express';
import { reportController } from '../controllers/report.controller';

const router = Router();

router.post('/upload', reportController.uploadReport);
router.get('/patient/:aadhaar', reportController.getPatientReports);

export default router;
