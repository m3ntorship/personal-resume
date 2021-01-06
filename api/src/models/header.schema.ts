import * as mongoose from 'mongoose';

export const HeaderSchema = new mongoose.Schema({
  name: String,
  bio: String,
  avatar: String,
});