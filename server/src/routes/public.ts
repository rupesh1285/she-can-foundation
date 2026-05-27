import { Router } from 'express';
import { saveVolunteer, saveAmbassador, saveContact } from '../controllers/publicController';

const router = Router();

router.post('/volunteers', saveVolunteer);
router.post('/ambassadors', saveAmbassador);
router.post('/contact', saveContact);

export default router;
