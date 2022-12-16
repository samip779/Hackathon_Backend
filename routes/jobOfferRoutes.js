import express from 'express';

const router = express.Router();

import {addJob, getJobs, getJob, applyJob, getMyCreatedOffers, getMyCreatedOffer} from '../controllers/jobOfferControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/',protect, addJob);
router.get('/',protect, getJobs);
router.get('/my-offers', protect, getMyCreatedOffers);
router.get('/my-offers/:id', protect, getMyCreatedOffer);
router.get('/:id', getJob);
router.post('/apply/:id',protect, applyJob);

export default router;
