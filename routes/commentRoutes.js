import express from 'express';

const router = express.Router();

import {
 addComment,
 getComments
} from '../controllers/commentControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/:post_id', protect, addComment);
router.get('/:post_id', getComments);


export default router;