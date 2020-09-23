import { Document } from 'mongoose';

export interface Navigation extends Document {
  title: string;
  linkUrl: string;
}