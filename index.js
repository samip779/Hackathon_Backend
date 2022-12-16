import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';


import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// Routes
import userRoutes from './routes/userRoutes.js';
import jobOfferRoutes from './routes/jobOfferRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

// app.use(cors)
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/job-offer', jobOfferRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/health', (req, res) => {
  res.json({
    status: 'OK',
  });
});

app.use(notFound)
app.use('*', errorHandler)

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
