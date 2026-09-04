import express from 'express';
import eventsRouter from './routes/events.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { requestLogger } from "./middlewares/logger.js";
import healthRouter from "./routes/health.router.js";


const app = express();

app.use(requestLogger);
app.use(express.json());
app.use('/api/events', eventsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/health", healthRouter);


export default app;
