import * as mongoose from 'mongoose';

export const LinksSchema = new mongoose.Schema({
  title: String,
  linkUrl: String,
});