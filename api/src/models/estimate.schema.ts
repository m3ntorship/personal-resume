import * as mongoose from 'mongoose';

export const EstimateSchema = new mongoose.Schema({
  subTitle: String,
  title: String,
  button: {
    label: String,
    url: String,
  }
}); 