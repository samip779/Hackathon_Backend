
import express from 'express'


// Routes
import userRoutes from './routes/userRoutes.js'




const app = express();

const PORT = process.env.PORT || 3000

app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    console.log(`App listning on ${PORT}`)
});

