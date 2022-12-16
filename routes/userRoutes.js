import express from 'express';

const router = express.Router();

import {
  register,
  login,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js';

import { protect } from '../middleware/authorization.js';

router.post('/register', register);
router.post('/login', login);
router.put('/update-profile', protect, updateUserProfile);
router.get('/:id', getUserProfile);

export default router;
