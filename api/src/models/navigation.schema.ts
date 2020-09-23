import * as mongoose from 'mongoose';

export const NavigationSchema = new mongoose.Schema({
  title: String,
  linkUrl: String,
});