import GlassType from '../models/glassType';

/**
 * Get all Glass Types
 * @param req
 * @param res
 * @returns void
 */
export function getGlassTypes(req, res) {
  GlassType.find().sort('-dateAdded').exec((err, glassTypes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ glassTypes });
  });
}
