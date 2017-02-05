import { Router } from 'express';
import * as OrderController from '../controllers/order.controller';
const router = new Router();

// Get all order
router.route('/orders').get(OrderController.getPosts);

// Get one order by cuid
router.route('/orders/:cuid').get(OrderController.getPost);

// Add a new order
router.route('/orders').post(OrderController.addPost);

// Delete an order by cuid
router.route('/orders/:cuid').delete(OrderController.deletePost);

export default router;
