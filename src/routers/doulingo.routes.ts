import { Router } from 'express';
import { DoulingoController } from '../controllers/doulingo.controller.js';

const router = Router();

router.get('/', DoulingoController.GetExpToday);

export default router;