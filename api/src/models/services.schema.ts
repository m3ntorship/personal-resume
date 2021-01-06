import * as mongoose from 'mongoose';

export const ServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service must have a title'],
  },
  cards: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }
});