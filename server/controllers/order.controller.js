import Order from '../models/order';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getOrders(req, res) {
  Order.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save an order
 * @param req
 * @param res
 * @returns void
 */
export function addOrders(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newOrder = new Order(req.body.post);

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
    res.json({ post: saved });
  });
}

/**
 * Get a single order
 * @param req
 * @param res
 * @returns void
 */
export function getOrder(req, res) {
  Order.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete an order
 * @param req
 * @param res
 * @returns void
 */
export function deleteOrder(req, res) {
  Order.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
