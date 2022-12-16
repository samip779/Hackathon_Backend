import express from 'express';

const router = express.Router();

import {
  register,
  login,
  getUserProfile,
} from '../controllers/userControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserProfile);

export default router;
