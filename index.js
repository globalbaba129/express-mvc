import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './Routes/productRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const ip = process.env.IP_ADDRESS || '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URI);

app.use('/home', productRoutes);

app.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
