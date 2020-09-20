import * as mongoose from 'mongoose';

export const RecworkSchema = new mongoose.Schema({
  title: String,
  listItems: [
    {
      id: String,
      title: String,
    }
  ],
  imgUrl: [
    {
      id: String,
      url: String,
    }
  ],
  button: {
    title: String,
    url: String,
  }
});