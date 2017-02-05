import { Router } from 'express';
import * as OrderController from '../controllers/order.controller';
const router = new Router();

// Get all order
router.route('/orders').get(OrderController.getOrders);

// Get one order by cuid
router.route('/orders/:cuid').get(OrderController.getOrder);

// Add a new order
router.route('/orders').post(OrderController.addOrder);

// Delete an order by cuid
router.route('/orders/:cuid').delete(OrderController.deleteOrder);

export default router;
