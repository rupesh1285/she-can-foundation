import { Router } from 'express';
import { auth } from '../middleware/auth';
import {
  login,
  getVolunteers, getAmbassadors, getContacts,
  updateVolunteerStatus, updateAmbassadorStatus, updateContactStatus,
  deleteVolunteer, deleteAmbassador, deleteContact,
  exportVolunteers, exportAmbassadors, exportContacts
} from '../controllers/adminController';

const router = Router();

router.post('/login', login);

// Protected routes
router.use(auth);

router.get('/volunteers', getVolunteers);
router.get('/ambassadors', getAmbassadors);
router.get('/contacts', getContacts);

router.patch('/volunteers/:id/status', updateVolunteerStatus);
router.patch('/ambassadors/:id/status', updateAmbassadorStatus);
router.patch('/contacts/:id/status', updateContactStatus);

router.delete('/volunteers/:id', deleteVolunteer);
router.delete('/ambassadors/:id', deleteAmbassador);
router.delete('/contacts/:id', deleteContact);

router.get('/volunteers/export/csv', exportVolunteers);
router.get('/ambassadors/export/csv', exportAmbassadors);
router.get('/contacts/export/csv', exportContacts);

export default router;
