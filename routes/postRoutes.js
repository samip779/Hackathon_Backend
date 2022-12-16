import express from 'express';

const router = express.Router();

import {
 addPost,
 getPosts
} from '../controllers/postControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/', protect, addPost);
router.get('/', getPosts);


export default router;