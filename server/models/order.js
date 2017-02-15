import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: { type: 'String', required: true },
  deliveryDate: { type: 'Date', required: true },
  pickupDate: { type: 'Date', required: true },
  invoiceUseDays: { type: 'Number', required: true },
  address: { type: 'String', required: true },
  comments: { type: 'String', require: false },

  orderId: { type: 'String', required: true },
  discountFactor: { type: 'String', required: true },
  status: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Order', orderSchema);
