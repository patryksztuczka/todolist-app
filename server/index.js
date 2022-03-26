import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";

const app = express();

const CONNECTION_URL = `mongodb+srv://patryksztuczka:${process.env.DB_PASSWORD}@cluster0.ufylr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(err => console.error(err.message));

app.use(cors());