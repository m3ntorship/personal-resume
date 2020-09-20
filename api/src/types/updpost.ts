import { Document } from 'mongoose';

export interface Post {
  title: string;
  username: string;
  likes: number;
  comments: number;
  id: string;
}

export interface Updpost extends Document {
  postsHeader: string;
  posts: Post[];
}