import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import sprintRoutes from './routes/sprintRoutes.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', sprintRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));



//ramirofurtado backend
 