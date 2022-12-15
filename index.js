import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import userRoutes from './routes/userRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

// app.use(cors)
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/health', (req, res) => {
  res.json({
    status: 'OK',
  });
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
