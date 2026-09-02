import {Router} from 'express';
const router = Router();

import {getEvents } from '../controllers/events.controller.js';

router.get('/', getEvents);

export default router;
