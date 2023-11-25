import { Schema } from 'mongoose';
import { userOrders } from './order.interface';

export const orderSchema = new Schema<userOrders>({
  productName: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price  is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});
