import express from 'express';

const router = express.Router();

import {addJob} from '../controllers/jobOfferControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/',protect, addJob);


export default router;
