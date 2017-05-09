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
 * Check an order
 * @param req
 * @param res
 * @returns void
 */

export function checkAvailability(req, res) {
  if (!req.body.order.glasses || !req.body.order.date1 || !req.body.order.date2) {
    res.status(403).end();
  }

  const someFunction = () => {
    const availability = {
      1: 20,
      2: 30,
      3: 40,
    };

    return availability;
  };

  // to test just send back an array first
  // get all current orders => which have date1 date2 and glass id array {fake this at the moment}
  // filter down to all current orders that pass the algorithm
  // total values against ids
  // get entire inventory stock => glass ids with an amount {fake this at the moment}

  res.json(someFunction());
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
