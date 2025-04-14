import express from 'express';
import { getSprints, createSprint } from '../controllers/sprintController.js';

const router = express.Router();

router.get('/sprints', getSprints);
router.post('/sprints', createSprint);

export default router;
