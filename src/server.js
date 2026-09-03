import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error.message);
  });

