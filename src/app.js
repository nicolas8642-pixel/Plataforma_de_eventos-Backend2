import express from 'express';
import eventsRouter from './routes/events.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { requestLogger } from "./middlewares/logger.js";


const app = express();
app.use(requestLogger);
app.use(express.json());
app.use('/api/events', eventsRouter);
app.use("/api/sessions", sessionsRouter);

app.get('/api/health', (req, res) => {
    res.status(200).json({status: 'ok', message: 'Servidor activo'});
});

export default app;
