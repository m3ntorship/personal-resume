import * as mongoose from 'mongoose';

export const AboutusSchema = new mongoose.Schema({
  title: String,
  paragraph: String,
  leftSecImg: String,
  btnLabel: String,
  progressbars: [
    {
      bgcolor: String,
      progress: Number,
      label: String,
      id: String,
      icon: String,
    }
  ],
});