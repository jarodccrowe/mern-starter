import { Router } from 'express';
import * as GlassTypeController from '../controllers/glassType.controller';
const router = new Router();

// Get all Posts
router.route('/glasstypes').get(GlassTypeController.getGlassTypes);

export default router;
