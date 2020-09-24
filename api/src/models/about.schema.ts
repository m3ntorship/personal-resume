import * as mongoose from 'mongoose';

export const AboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  label: String,
  progressbars: [
    {
      bgcolor: String,
      progress: Number,
      label: String,
      key: String,
      icon: String
    }
  ]
})