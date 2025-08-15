import productRoutes from './routes/productRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config(); 
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/produks', productRoutes);


app.listen(PORT, () => {
  console.log("Express API running on port: " + PORT);
});
