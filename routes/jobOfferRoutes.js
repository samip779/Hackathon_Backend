import express from 'express';

const router = express.Router();

import {addJob, getJobs, getJob} from '../controllers/jobOfferControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/',protect, addJob);
router.get('/',protect, getJobs);
router.get('/:id', getJob);


export default router;
