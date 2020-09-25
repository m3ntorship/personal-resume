import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'card must have a title']
  },
  description: {
    type: String,
    required: [true, 'You should describe your service'],
    minLength: 20,
  }
});