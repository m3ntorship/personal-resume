import * as mongoose from 'mongoose';

export const EstimateSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  img: String,
});