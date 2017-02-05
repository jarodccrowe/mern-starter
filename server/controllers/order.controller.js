import Order from '../models/order';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all orders
 * @param req
 * @param res
 * @returns void
 */
export function getOrders(req, res) {
  Order.find().sort('-dateAdded').exec((err, orders) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ orders });
  });
}

/**
 * Save an order
 * @param req
 * @param res
 * @returns void
 */
export function addOrder(req, res) {
  if (!req.body.order.name || !req.body.order.title || !req.body.order.content) {
    res.status(403).end();
  }

  const newOrder = new Order(req.body.order);

  // Let's sanitize inputs
  newOrder.title = sanitizeHtml(newOrder.title);
  newOrder.name = sanitizeHtml(newOrder.name);
  newOrder.content = sanitizeHtml(newOrder.content);

  newOrder.slug = slug(newOrder.title.toLowerCase(), { lowercase: true });
  newOrder.cuid = cuid();
  newOrder.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ order: saved });
  });
}

/**
 * Get a single order
 * @param req
 * @param res
 * @returns void
 */
export function getOrder(req, res) {
  Order.findOne({ cuid: req.params.cuid }).exec((err, order) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ order });
  });
}

/**
 * Delete an order
 * @param req
 * @param res
 * @returns void
 */
export function deleteOrder(req, res) {
  Order.findOne({ cuid: req.params.cuid }).exec((err, order) => {
    if (err) {
      res.status(500).send(err);
    }

    order.remove(() => {
      res.status(200).end();
    });
  });
}
