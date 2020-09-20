import * as mongoose from 'mongoose';

export const UpdpostSchema = new mongoose.Schema({
  postsHeader: String,
  posts: [
    {
      title: String,
      username: String,
      likes: Number,
      comments: Number,
      id: String,
    }
  ]
});