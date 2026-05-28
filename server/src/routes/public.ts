import express from 'express';
import { submitVolunteer, submitAmbassador, submitContact } from '../controllers/publicController';
import { validate } from '../middleware/validate';
import { volunteerSchema, ambassadorSchema, contactSchema } from '../utils/validators';

const router = express.Router();

router.post('/volunteer', validate(volunteerSchema), submitVolunteer);
router.post('/ambassador', validate(ambassadorSchema), submitAmbassador);
router.post('/contact', validate(contactSchema), submitContact);

export default router;
