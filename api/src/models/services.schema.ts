import * as mongoose from 'mongoose';

export const ServicesSchema = new mongoose.Schema({
  title: String,
  cards: [
    {
      cardTitle: String,
      details: String,
      button: {
        title: String,
        url: String,
      },
      key: String,
    }
  ],
});