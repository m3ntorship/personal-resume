import * as mongoose from 'mongoose';

export const NavSchema = new mongoose.Schema({
  title: String,
  description: String,
  links: [String],
  images: [String],

})