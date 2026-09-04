import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error.message);
  });