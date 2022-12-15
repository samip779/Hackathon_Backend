
import express from 'express'
import 'express-async-errors'
import cors from 'cors'


// Routes
import userRoutes from './routes/userRoutes.js'




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors)


// Routes
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
