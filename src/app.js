import productRoutes from './routes/productRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config(); 
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/products', productRoutes);
app.get("/api", (req, res) => {
  res.send("Hiiii");
});

app.listen(PORT, () => {
  // console.log("Express API running on port: http://" + PORT);
  console.log(`Server running at http://localhost:${PORT}/`);

});
